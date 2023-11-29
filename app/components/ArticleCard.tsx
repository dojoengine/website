import Image from "next/image";
import Link from "next/link";
import { Article } from "../types";
import { ArrowRight } from "../icons/ArrowRight";
import { ArticleTags } from "./articles/ArticleTags";

export const ArticleCard = ({ article, lng }: { article: Article; lng: string }) => {
  return (
    <Link
    className="flex p-3 sm:p-6 bg-dojo-blue-750 hover:bg-dojo-blue-650 rounded-2xl w-full "
    href={`/${lng}/articles/${article.id}`}
    >
      <Image
        className="rounded-md object-cover sm:block hidden h-[120px] w-[120px] my-auto"
        alt="art"
        width={"120"}
        height={"120"}
        src={article.cover}
      />
      <div className="px-3 md:px-6">
        <ArticleTags article={article} />
        {/* <span className="px-4 py-1 rounded bg-dojo-blue-700 text-xs uppercase">{article.category}</span> */}
        <h2 className="text-xl font-bold text-white">{article.title}</h2>
        <p className="line-clamp-4 md:line-clamp-2">{article.subtitle}</p>
      </div>
      {/* <div className=" self-center sm:block hidden">
        <button className="rounded-full bg-dojo-blue-300/30 p-2 hover:bg-dojo-red-400"><ArrowRight /></button>
      </div> */}
    </Link>
  );
};
