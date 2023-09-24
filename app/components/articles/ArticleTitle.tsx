import Image from "next/image";
import Link from "next/link";
import { Article } from "@/app/types";

export const ArticleTitle = ({ article, lng }: { article: Article; lng?: string }) => {
  if (!article.title) {
    return null;
  }
  return (
    <h1
      id="article-title"
      className="max-w-7xl mx-auto my-10 lg:my-20 text-white text-4xl lg:text-6xl text-center lg:text-left"
    >
      {article.title}
    </h1>
  );
};
