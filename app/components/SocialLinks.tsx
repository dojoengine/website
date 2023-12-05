import Link from "next/link";

import { GithubIcon } from "../icons/Github";
import { DiscordIcon } from "../icons/Discord";
import { TelegramIcon } from "../icons/Telegram";

const links = [
  {
    icon: <GithubIcon />,
    url: "https://github.com/dojoengine/dojo",
  },
  {
    icon: <DiscordIcon />,
    url: "https://discord.gg/vUN4Xq9Qv6",
  },
  {
    icon: <TelegramIcon />,
    url: "https://t.me/+DJxNYR3rsfJmZTg1",
  },
];

export const SocialLinks = () => {
  return (
    <>
      {links.map((link, idx) => {
        return (
          <Link
            key={`social-${idx}`}
            href={link.url}
            target="_blank"
            className="block bg-dojo-vibrant-blue hover:bg-dojo-red-400 fill-dojo-blue-800 text-dojo-blue-800 font-bold rounded-full p-1 sm:p-2"
          >
            {link.icon}
          </Link>
        );
      })}
    </>
  );
};
