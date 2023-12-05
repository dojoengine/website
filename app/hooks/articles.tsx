import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Article } from "../types";

import { Code } from "../components/CodeBlock";

import * as prod from "react/jsx-runtime";
import { unified } from "unified";

import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkImages from "remark-images";
import remarkRehype from "remark-rehype";

import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";

// @ts-expect-error: the react types are missing.
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };

export async function markdownToHtml(markdown: any) {
  let totalH2 = 0;
  const summary: string[] = ["Intro"];

  const result = await remark()
    // @ts-ignore
    .use(html, {
      sanitize: false,
      handlers: {
        heading(state, node) {
          // console.log(state);
          // console.log(node);

          //h2
          if (node.depth === 2) {
            summary.push(node.children[0].value);
            totalH2++;
          }

          const result = {
            type: "element",
            tagName: "h" + node.depth,
            properties: {
              id: node.depth === 2 ? `summary-${totalH2}` : "",
            },
            children: state.all(node),
          };
          // @ts-ignore
          state.patch(node, result);
          // @ts-ignore
          return state.applyData(node, result);
        },
      },
    })
    .process(markdown);

  return {
    processedContent: result.toString(),
    summary,
  };
}

export async function markdownToReact(markdown: any) {
  const result = await unified()
    .use(remarkParse, { allowDangerousHTML: true, escapeHtml: false })
    .use(remarkImages)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeRaw)
    .use(rehypeReact, {
      ...production,
      elementAttributeNameCase: "react",
      stylePropertyNameCase: "dom",
      components: {
        code: ({ children }) => {
          return <Code text={children?.toString() || ""} />;
        },
        a: ({ children, ...props }) => {
          return (
            <a {...props} target={props.href?.startsWith("#") ? undefined : "_blank"}>
              {children}
            </a>
          );
        },
      
      },
    })
    .process(markdown);
  // console.log(result);

  return {
    processedReact: result.result,
  };
}

const articlesDirectory = path.join(process.cwd(), "app/content");

export function getSortedArticlesData() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      id,
      ...data,
    };
  });

  return allArticlesData.sort((a: any, b: any) => (a.date < b.date ? 1 : -1));
}

export function getAllArticleIds() {
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getArticleData(id: string) {
  const fullPath = path.join(articlesDirectory, `${decodeURI(id)}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const { processedContent, summary } = await markdownToHtml(content);
  const { processedReact } = await markdownToReact(content);

  return {
    id,
    content,
    contentReact: processedReact,
    contentHtml: processedContent,
    summary: summary,
    ...data,
  };
}
