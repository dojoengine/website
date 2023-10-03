
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/app/types";

export const ArticleNav = ({ article, lng }: { article: Article; lng?: string }) => {

  return (
    <div className="w-[240px] hidden lg:flex flex-col self-start sticky top-48">
      <div className="text-bold text-white text-sm">CONTENTS</div>
      <div className="mt-3">
        <ul className=" text-dojo-vibrant-blue-400-light text-bold ">
          <li className="pl-3 border-l-4 border-dojo-vibrant-blue-400-light">
            <Link href="#article-title">Intro</Link>
          </li>
          {article.summary &&
            article.summary.map((subtitle, key) => (
              <li className="pl-3 border-l-4 border-dojo-vibrant-blue-400-light" key={key}>
                <Link className="no-underline" href={`#summary-${key}`}>
                  {subtitle}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
