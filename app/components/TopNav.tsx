"use client";

import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import { DojoSmall } from "../icons/DojoSmall";
import { LangageSelector } from "./LangageSelector/client";
import { LanguageIcon } from "../icons/Language";
import { languages } from "../i18n/settings";
import { Book } from "../icons/Book";

// const dropdownItems = languages.map((i) => ({
//   label: i.toUpperCase(),
//   value: i,
//   icon: <LanguageIcon />,
// }));

export const TopNav = ({ lng }: { lng: string }) => {
  return (
    <div className="w-full max-w-[1500px] mx-auto">
      <nav className="flex justify-between p-2 px-4 md:p-6 md:px-9">
        <div>
          <Link href={`/${lng}`}>
            <DojoSmall />
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          {/* <LangageSelector items={dropdownItems} icon={<LanguageIcon />} lng={lng} /> */}

          <Link
            href="https://book.dojoengine.org/"
            target="_blank"
            className="block bg-dojo-vibrant-blue hover:bg-dojo-red-400 fill-dojo-blue-800 text-dojo-blue-800 font-bold rounded-full px-3 py-1 md:py-2"
          >
            DOCS
          </Link>

          <SocialLinks />
        </div>
      </nav>
    </div>
  );
};
