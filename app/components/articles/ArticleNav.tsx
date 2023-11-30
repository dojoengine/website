"use client";

import Image from "next/image";
import Link from "next/link";
import { Article } from "@/app/types";
import { useCallback, useEffect, useState } from "react";

export const ArticleNav = ({ article, lng }: { article: Article; lng?: string }) => {
  const [activeLink, setActiveLink] = useState(0);

  const onScrollOrResize = useCallback(() => {
    const h1 = document.getElementById("article-title");
    const allH2 = document.getElementsByTagName(`h2`);
    const anchors = [h1, ...Array.from(allH2)].map((el, key) => {
      if (el){
        const bounds = el.getBoundingClientRect();
        return bounds.top;
      }else{
        return 0;
      }
    
    });

    for (let i = 0; i < anchors.length; i++) {
      if (anchors[i] < 150) {
        setActiveLink(i);
      }
    }
  }, [article]);

  useEffect(() => {
    onScrollOrResize();

    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("scroll", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [onScrollOrResize]);

  const onClick = useCallback((index: number) => {
    const h1 = document.getElementById("article-title");
    const allH2 = document.getElementsByTagName(`h2`);

    if (index === 0 && h1) {
      h1.scrollIntoView({ behavior: "smooth" });
    } else {
      allH2[index - 1]!.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="article-nav-container w-[240px] hidden lg:flex flex-col self-start sticky top-48">
      <div className="text-bold text-white text-sm">CONTENTS</div>
      <div className="mt-3">
        <ul className="article-nav text-dojo-blue-600">
          {article.summary &&
            article.summary.map((subtitle, key) => (
              <li className={activeLink === key ? "active" : ""} key={key} onClick={() => onClick(key)}>
                <a className="no-underline cursor-pointer">
                  {subtitle}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
