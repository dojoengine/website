import Image from "next/image";
import Link from "next/link";
import { Article } from "../types";

export const ArticleContent = ({ article, lng }: { article: Article; lng: string }) => {
  if (!article.contentHtml) {
    return null;
  }
  return <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} className="article-content container max-w-xl text-white mx-auto lg:mx-0 font-light" />;
};
