import Image from "next/image";
import Link from "next/link";
import { Article } from "../types";

import { ArticleTags } from "./ArticleTags";

export const ArticleInfos = ({ article, lng }: { article: Article; lng: string }) => {
  return (
    <>
      <aside className="max-w-xl mx-auto w-auto lg:w-[240px] lg:mx-0">
        <div className="flex flex-row lg:flex-col gap-6 items-center lg:items-start">
          {article.author_img && <img src={article.author_img} width="75px" height="75px" className="rounded-full" />}
          <div>
            {article.author && <div className="text-white text-lg font-bold">{article.author}</div>}
            {article.date && <date>{article.date}</date>}
            <div className="mt-3">
              <ArticleTags article={article} />
            </div>
          </div>
        </div>
      </aside>
      <hr className="max-w-xl w-full border-dojo-blue-dark mx-auto block lg:hidden  opacity-10" />
    </>
  );
};
