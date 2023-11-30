import Image from "next/image";
import Link from "next/link";
import { Article } from "@/app/types";

export const ArticleBanner = ({ article, lng }: { article: Article; lng?: string }) => {
  if (!article.cover) {
    return null;
  }
  return (
    <div className="article-banner-container relative h-[300px] mx-auto">
        <Image src={article.cover} className="2xl:rounded-lg" width={1536} height={300} alt="banner" />
    </div>
  );
};
