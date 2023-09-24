import Image from "next/image";
import Link from "next/link";
import { Article } from "../types";

export const ArticleTags = ({ article, lng }: { article: Article; lng: string }) => {
  if (!article.tags) {
    return null;
  }
  return (
    <div className="flex flex-wrap gap-2">
      {article.tags.map((tag) => {
        return <div className={`p-1 px-2 text-sm rounded-md text-dojo-blue  bg-tag-${tag} capitalize`}>{tag}</div>;
      })}
    </div>
  );
};
