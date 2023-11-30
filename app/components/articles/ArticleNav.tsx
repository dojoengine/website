"use client";

import Image from "next/image";
import Link from "next/link";
import { Article } from "@/app/types";
import { useCallback, useEffect, useState } from "react";

export const ArticleNav = ({ article, lng }: { article: Article; lng?: string }) => {
  const [activeLink, setActiveLink] = useState("summary-0");

  const onScrollOrResize = useCallback(() => {
    const anchors = article.summary.map((subtitle, key) => {
      const el = document.getElementById(`summary-${key}`);
      if (el) {
        const bounds = el.getBoundingClientRect();
        return bounds.top;
      } else {
        return 0;
      }
    });

    for (let i = 0; i < anchors.length; i++) {
      if (anchors[i] < 150) {
        setActiveLink(`summary-${i}`);
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

  const onClick = useCallback((anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  },[]);

  return (
    <div className="article-nav-container w-[240px] hidden lg:flex flex-col self-start sticky top-48">
      <div className="text-bold text-white text-sm">CONTENTS</div>
      <div className="mt-3">
        <ul className="article-nav text-dojo-blue-600">
          {article.summary &&
            article.summary.map((subtitle, key) => (
              <li className={activeLink === `summary-${key}` ? "active" : ""} key={key}>
                <a className="no-underline cursor-pointer" onClick={() => onClick(`summary-${key}`)}>
                  {subtitle}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
