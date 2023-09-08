import Image from "next/image";
import Link from "next/link";
import { Article } from "../types";

export const ArticleCard = ({ article, lng }: { article: Article; lng: string }) => {
  return (
    <Link
      className="flex space-y-3 p-6 bg-dojo-blue-500/20 rounded-2xl w-full"
      href={`/${lng}/articles/${article.id}`}
    >
      <Image className="rounded-xl" alt="art" width={'150'} height={'150'} src="https://loaf.coffee/images/hyperstructure.png" />
      <div className="px-4">
        {article.tags.map(a => <span className="px-2 py-1 rounded-xl bg-dojo-blue-700 mx-1">{a}</span>)}
        <h2 className="uppercase text-xl font-bold">{article.title}</h2>
        <p>{article.subtitle}</p>
      </div>

    </Link>
  );
};
