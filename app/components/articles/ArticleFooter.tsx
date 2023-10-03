import Image from "next/image";
import Link from "next/link";
import { Article } from "@/app/types";

export const ArticleFooter = ({ article, lng }: { article: Article; lng?: string }) => {
  return (
    <footer className="max-w-5xl mx-auto  text-white">
      <hr className="border-dojo-blue-400 my-6 lg:my-12 opacity-10" />

      <div className="container max-w-xl mx-auto flex mb-12 gap-12 items-center">
        <div className="flex-shrink-0 hidden lg:flex">
          {article.author_img && <img src={article.author_img} width="150px" height="150px" className="rounded-full" />}
        </div>
        <div>
          <>
            {article.author && <div className=" text-lg font-bold mb-3">{article.author}</div>}
            {article.author_desc && <div className="font-light">{article.author_desc}</div>}
          </>
        </div>
      </div>
    </footer>
  );
};
