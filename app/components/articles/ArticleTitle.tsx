import Image from "next/image";
import Link from "next/link";
import { Article } from "@/app/types";

export const ArticleTitle = ({
  article,
  lng,
}: {
  article: Article;
  lng?: string;
}) => {
  if (!article.title) {
    return null;
  }
  return (
    <div className="max-w-3xl mx-auto py-10 lg:pt-py-20 text-white text-4xl lg:text-6xl text-center lg:text-left">
      <h1
        id="article-title"
        className="text-white text-4xl lg:text-6xl text-center lg:text-left"
      >
        {article.title}
      </h1>
      <div className="text-slate-400	 text-lg">
        Published on{" "}
        {article.date && (
          <time className="font-bold">
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        )}{" "}
        by{" "}
        {article.author && (
          <span className="font-bold">{article.author}</span>
        )}
      </div>
    </div>
  );
};
