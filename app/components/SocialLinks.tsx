import Image from "next/image";
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
    <ul className="flex flex-row">
      {links.map((link, idx) => {
        return (
          <li key={`social-${idx}`}>
            <Link
              href={link.url}
              target="_blank"
              className="block bg-dojo-blue-med hover:bg-dojo-red rounded-full p-2 ml-4"
            >
              {link.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
