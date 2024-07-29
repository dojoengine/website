"use client";

import { Button } from "@/app/components/Button";
import { LucideX, Menu } from "lucide-react";
import { create } from "zustand";
import { motion } from "framer-motion";
import { Socials } from "@/app/components/footer/Links";

import DojoLogo from "@/app/components/icons/dojo-only-icon.svg";

import { useEffect, useState } from "react";
import Link from "next/link";
export const useMenuStore = create<{
  decreasedPadding: boolean;
  toggleMenu: () => void;
  menuOpen: boolean;
}>()((set, get) => ({
  decreasedPadding: false,
  toggleMenu: () => set({ menuOpen: !get().menuOpen }),
  menuOpen: false,
}));

export const MenuLinks = [
  {
    title: "Docs",
    href: "/docs",
  },
  {
    title: "Posts",
    href: "/posts",
  },
  {
    title: "GitHub",
    href: Socials.GitHub,
  },
  {
    title: "Discord",
    href: Socials.Discord,
  },

  {
    title: "Telegram",
    href: Socials.Telegram,
  },
];

export default function Navigation() {
  const { decreasedPadding, toggleMenu, menuOpen } = useMenuStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      transition={{ duration: 0.5 }}
      className={`transition-padding fixed left-0 right-0 top-0 z-[100] flex justify-center ${
        decreasedPadding ? "sm:p-4" : "px-2 py-4 sm:p-12"
      }`}
    >
      <div className="flex w-full max-w-[1400px] items-center justify-between rounded-3xl bg-[rgba(2,21,49,0.3)] px-8 py-4 backdrop-blur-[10px]">
        <Link href="/">
          <DojoLogo className="w-6 sm:w-6" />
        </Link>

        <div className=" hidden justify-between gap-2 self-center sm:flex sm:flex-row">
          <a href={Socials.Discord} target="_blank">
            <Button variant={"ghost"} size={"icon"}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={41}
                fill="none"
                className="fill-white transition-all duration-200 hover:fill-badge-red"
              >
                <path d="M26.435 14.785a.044.044 0 0 0-.022-.02 14.076 14.076 0 0 0-3.473-1.077.053.053 0 0 0-.056.027 9.79 9.79 0 0 0-.432.888 13 13 0 0 0-3.901 0 8.98 8.98 0 0 0-.44-.888.055.055 0 0 0-.055-.027c-1.2.207-2.367.57-3.473 1.077a.05.05 0 0 0-.023.02c-2.212 3.303-2.818 6.525-2.52 9.707a.058.058 0 0 0 .022.04 14.152 14.152 0 0 0 4.26 2.153.055.055 0 0 0 .06-.02c.329-.447.62-.921.871-1.417a.055.055 0 0 0-.01-.063.054.054 0 0 0-.02-.012 9.324 9.324 0 0 1-1.33-.634.054.054 0 0 1-.022-.07.055.055 0 0 1 .017-.02c.089-.068.179-.137.264-.208a.053.053 0 0 1 .055-.007c2.792 1.274 5.816 1.274 8.575 0a.052.052 0 0 1 .056.007c.085.07.174.14.265.207a.055.055 0 0 1 .021.047.054.054 0 0 1-.026.044c-.425.248-.87.46-1.332.633a.055.055 0 0 0-.029.076c.256.493.547.966.871 1.417a.055.055 0 0 0 .06.02 14.105 14.105 0 0 0 4.268-2.153.056.056 0 0 0 .022-.039c.356-3.679-.596-6.875-2.523-9.708Zm-8.764 7.77c-.841 0-1.534-.772-1.534-1.72 0-.947.68-1.718 1.534-1.718.86 0 1.546.778 1.533 1.719 0 .947-.68 1.719-1.534 1.719Zm5.669 0c-.84 0-1.533-.772-1.533-1.72 0-.947.679-1.718 1.533-1.718.86 0 1.547.778 1.534 1.719 0 .947-.673 1.719-1.534 1.719Z" />
              </svg>
            </Button>
          </a>
          <a href={Socials.Telegram} target="_blank">
            <Button variant={"ghost"} size={"icon"}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={41}
                fill="none"
                className="fill-white transition-all duration-200 hover:fill-badge-red"
              >
                <path d="M27.198 13.11c-.273-.232-.702-.265-1.145-.087-.467.187-13.196 5.647-13.714 5.87-.095.033-.918.34-.833 1.024.076.617.737.872.818.902l3.236 1.108c.215.715 1.007 3.351 1.182 3.915.109.35.287.812.598.907.274.106.546.01.723-.129l1.978-1.835 3.194 2.49.076.046c.217.096.425.144.623.144.153 0 .3-.028.44-.086.48-.196.67-.652.69-.704l2.386-12.4c.146-.663-.056-1-.252-1.165Zm-8.784 9.26-1.091 2.911-1.092-3.639 8.37-6.186-6.187 6.914Z" />
              </svg>
            </Button>{" "}
          </a>
          <a href={Socials.GitHub} target="_blank">
            <Button variant={"ghost"} size={"icon"}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={41}
                fill="none"
                className="fill-white transition-all duration-200 hover:fill-badge-red"
              >
                <path d="M18.591 22.762c0 .74-.386 1.951-1.3 1.951-.913 0-1.3-1.21-1.3-1.951 0-.74.387-1.951 1.3-1.951.914 0 1.3 1.21 1.3 1.951ZM29 20.974c0 1.13-.113 2.326-.62 3.364-1.342 2.713-5.032 2.65-7.675 2.65-2.684 0-6.594.095-7.99-2.65-.517-1.027-.715-2.235-.715-3.364 0-1.485.492-2.887 1.47-4.024a5.543 5.543 0 0 1-.273-1.728c0-.762.174-1.144.517-1.835 1.604 0 2.632.319 3.853 1.275a13.565 13.565 0 0 1 3.142-.354c.956 0 1.92.103 2.848.326 1.204-.946 2.23-1.247 3.817-1.247.348.69.518 1.073.518 1.835 0 .58-.093 1.158-.273 1.707.974 1.147 1.381 2.56 1.381 4.045Zm-2.277 1.788c0-1.555-.946-2.925-2.603-2.925-.67 0-1.31.12-1.984.212-.527.082-1.055.113-1.597.113-.538 0-1.066-.031-1.597-.113-.663-.092-1.31-.212-1.984-.212-1.657 0-2.603 1.37-2.603 2.925 0 3.11 2.848 3.588 5.327 3.588h1.707c2.49 0 5.334-.475 5.334-3.588Zm-2.926-1.951c-.913 0-1.3 1.21-1.3 1.951 0 .74.387 1.951 1.3 1.951.914 0 1.3-1.21 1.3-1.951 0-.74-.386-1.951-1.3-1.951Z" />
              </svg>
            </Button>{" "}
          </a>
        </div>
        <div className="hidden sm:block">
          <a
            className="uppercase"
            href={"https://book.dojoengine.org/"}
            target="_blank"
          >
            <Button>docs</Button>{" "}
          </a>
        </div>

        <Menu className="sm:hidden" onClick={() => toggleMenu()} size={24} />
      </div>
      {menuOpen && <MobileNavigation />}
    </motion.nav>
  );
}

export const MobileNavigation = () => {
  const { toggleMenu } = useMenuStore();
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };
  return (
    <motion.div
      className="absolute left-0 top-0 z-[100] h-screen w-screen bg-[rgba(2,21,49,1)] px-2 py-4 sm:hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="mt-4 flex justify-between self-center px-8 py-4">
        <div className="">
          <DojoLogo className="w-20 sm:mb-8 sm:w-96" />
        </div>
        <LucideX onClick={() => toggleMenu()} size={24} />
      </div>

      <div className="mt-10 flex flex-col gap-4 px-10">
        {MenuLinks.map((link) => (
          <Button variant={"outline"} size={"sm"} key={link.title}>
            <a target="_blank" href={link.href}>
              {link.title}
            </a>
          </Button>
        ))}
      </div>
    </motion.div>
  );
};
