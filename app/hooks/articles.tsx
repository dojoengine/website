import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Article } from "../types";

export default async function markdownToHtml(markdown: any) {
  let totalH2 = 0;
  const summary: string[] = [];

  const result = await remark()
    // @ts-ignore
    .use(html, {
      sanitize: false,
      handlers: {
        heading(state, node) {
          // console.log(state);
          // console.log(node);

          if (node.depth === 2) {
            summary.push(node.children[0].value);
            totalH2++;
          }

          const result = {
            type: "element",
            tagName: "h" + node.depth,
            properties: {
              id: node.depth === 2 ? `summary-${totalH2 - 1}` : "",
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

export async function getArticleData(id: any) {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const { processedContent, summary } = await markdownToHtml(content);

  // console.log(processedContent);
  // console.log(summary);

  return {
    id,
    contentHtml: processedContent,
    summary: summary,
    ...data,
  };
}
