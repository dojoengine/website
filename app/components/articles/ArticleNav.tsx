"use client";

import Image from "next/image";
import Link from "next/link";
import { Article } from "@/app/types";

import { useEffect, useState } from "react";

export const ArticleNav = ({ article, lng }: { article: Article; lng?: string }) => {
  const [subtitles, setSubtitles] = useState([]);

  // useEffect(() => {
  //   // should be done server side
  //   const subtitles = document.getElementsByTagName("h2");
  //   const parsed = [];
  //   for (let i = 0; i < subtitles.length; i++) {
  //     const el = subtitles[i];
  //     el.id = `subtitle-${i}`;
  //     parsed.push(el);
  //   }
  //   setSubtitles(parsed);
  // }, []);

  return (
    <div className="w-[240px] hidden lg:flex flex-col self-start sticky top-48">
      <div className="text-bold text-white text-sm">CONTENTS</div>
      <div className="mt-3">
        <ul className=" text-dojo-green-light text-bold ">
          <li className="pl-3 border-l-4 border-dojo-green-light">
            <Link href="#article-title">Intro</Link>
          </li>
          {/* {subtitles &&
            subtitles.map((subtitle, key) => (
              <li className="pl-3 border-l-4 border-dojo-green-light" key={key}>
                <Link className="no-underline" href={`#${subtitle.id}`}>
                  {subtitle.innerText}
                </Link>
              </li>
            ))} */}
        </ul>
      </div>
    </div>
  );
};
