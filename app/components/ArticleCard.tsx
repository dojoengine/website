import Image from "next/image";
import Link from "next/link";
import { Article } from "../types";
import { ArrowRight } from "../icons/ArrowRight";

export const ArticleCard = ({ article, lng }: { article: Article; lng: string }) => {
  return (
    <Link
      className="flex space-y-3 p-6 bg-dojo-blue-500/20 rounded-2xl w-full"
      href={`/${lng}/articles/${article.id}`}
    >
      <Image className="rounded-xl object-cover" alt="art" width={'150'} height={'150'} src={article.cover} />
      <div className="px-6">
        <span className="px-4 py-1 rounded bg-dojo-blue-700 text-xs uppercase">{article.category}</span>
        <h2 className="text-xl font-bold text-white">{article.title}</h2>
        <p>{article.subtitle}</p>
      </div>
      <div className=" self-center">
        <button className="rounded-full bg-dojo-blue-300/30 p-2 hover:bg-dojo-red"><ArrowRight /></button>
      </div>
    </Link>
  );
};
