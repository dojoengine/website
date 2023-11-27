import Image from "next/image";
import Link from "next/link";
import { Article } from "@/app/types";

export const ArticleBanner = ({ article, lng }: { article: Article; lng?: string }) => {
  if (!article.cover) {
    return null;
  }
  return (
    <div className="relative h-[300px] max-w-7xl mx-auto">
      <Image src={article.cover} objectFit="cover" layout="fill" alt="banner"/>
    </div>
  );
};
