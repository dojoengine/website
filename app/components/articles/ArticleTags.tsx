import Image from "next/image";
import Link from "next/link";
import { Article } from "@/app/types";

export const ArticleTags = ({ article, lng }: { article: Article; lng?: string }) => {
  if (!article.tags) {
    return null;
  }
  return (
    <div className="flex flex-wrap gap-2 mb-1">
      {article.tags.map((tag, key) => {
        return (
          <div className={`py-px px-2 text-xs rounded-md text-dojo-blue-800 bg-tag-${tag} capitalize`} key={key}>
            {tag}
          </div>
        );
      })}
    </div>
  );
};
