"use client";

import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import { DojoSmall } from "../icons/DojoSmall";
import { useRouter } from "next/router";
import { Dropdown } from "./Dropdown";
import { LanguageIcon } from "../icons/Language";


const docUrl = "https://book.dojoengine.org/";

const dropdownItems = [
    {
        label:"EN",
        value:"en-US",
        icon: <LanguageIcon />
    },
    {
        label:"FR",
        value:"fr-FR",
        icon: <LanguageIcon />
    },
    {
        label:"ES",
        value:"es-ES",
        icon: <LanguageIcon />
    },
]

export const TopNav = () => {
  return (
    <nav className="flex justify-between p-2 px-4 md:p-6 md:px-9">
      <div>
        <a href="/">
          <DojoSmall />
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <Dropdown items={dropdownItems} icon={<LanguageIcon />}/>
        <Link
          href={docUrl}
          target="_blank"
          className="block text-dojo-blue bg-dojo-blue-med hover:bg-dojo-red rounded-full p-2 px-4 ml-8 font-bold"
        >
          DOCS
        </Link>

        <SocialLinks />
      </div>
    </nav>
  );
};
