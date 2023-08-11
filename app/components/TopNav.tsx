"use client";

import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import { DojoSmall } from "../icons/DojoSmall";
import { useRouter } from "next/router";
import { LangageSelector } from "./LangageSelector/client";
import { LanguageIcon } from "../icons/Language";
import { languages } from "../i18n/settings";

const docUrl = "https://book.dojoengine.org/";

const dropdownItems = languages.map((i) => ({
  label: i.toUpperCase(),
  value: i,
  icon: <LanguageIcon />,
}));

export const TopNav = ({ lng }: { lng: string }) => {
  return (
    <nav className="flex justify-between p-2 px-4 md:p-6 md:px-9">
      <div>
        <Link href={`/${lng}`}>
          <DojoSmall />
        </Link>
      </div>
      <div className="flex items-center ">
        <LangageSelector items={dropdownItems} icon={<LanguageIcon />} lng={lng} />
        <Link
          href={docUrl}
          target="_blank"
          className="block text-dojo-blue bg-dojo-blue-400 hover:bg-dojo-red rounded-full p-2 px-4 ml-4 font-bold"
        >
          DOCS
        </Link>

        <SocialLinks />
      </div>
    </nav>
  );
};
