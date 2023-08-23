"use client";

import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import { DojoSmall } from "../icons/DojoSmall";
import { LangageSelector } from "./LangageSelector/client";
import { LanguageIcon } from "../icons/Language";
import { languages } from "../i18n/settings";
import { Book } from "../icons/Book";

const docUrl = "https://book.dojoengine.org/";

const mediaKitUrl = "https://drive.google.com/drive/folders/1f8Gry_K9_C3D3Hv6DTjand8pbQN4GMKE";

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
      <div className="flex items-center space-x-2">
        <LangageSelector items={dropdownItems} icon={<LanguageIcon />} lng={lng} />

        <Link
          href={mediaKitUrl}
          target="_blank"
          className=" text-dojo-blue bg-dojo-blue-400 hover:bg-dojo-red rounded-full p-1 sm:p-2 px-2 sm:px-4 ml-4 font-bold uppercase w-full flex space-x-2 "
        >
           Media {" "} <span className="hidden sm:block ml-2"> Kit</span>
          
        </Link>
        <Link
          href={docUrl}
          target="_blank"
          className="block text-dojo-blue bg-dojo-blue-400 hover:bg-dojo-red rounded-full p-1 sm:p-2 uppercase"
        >
          <span className="hidden sm:block">docs</span>
          
          <Book/>
        </Link>
        <SocialLinks />
      </div>
    </nav>
  );
};
