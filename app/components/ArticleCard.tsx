import Image from "next/image";
import Link from "next/link";
import { Article } from "../types";
import { ArrowRight } from "../icons/ArrowRight";

export const ArticleCard = ({ article, lng }: { article: Article; lng: string }) => {
  return (
    <Link
      className="flex space-y-3 p-3 sm:p-6 bg-dojo-blue-600 rounded-2xl w-full"
      href={`/${lng}/articles/${article.id}`}
    >
      <Image className="rounded-xl object-cover sm:block hidden" alt="art" width={'150'} height={'150'} src={article.cover} />
      <div className="sm:px-6 p-3">
        <span className="px-4 py-1 rounded bg-dojo-blue-700 text-xs uppercase">{article.category}</span>
        <h2 className="text-xl font-bold text-white">{article.title}</h2>
        <p className="line-clamp-2">{article.subtitle}</p>
      </div>
      <div className=" self-center sm:block hidden">
        <button className="rounded-full bg-dojo-blue-300/30 p-2 hover:bg-dojo-red"><ArrowRight /></button>
      </div>
    </Link>
  );
};
