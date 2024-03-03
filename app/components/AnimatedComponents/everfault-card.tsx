"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "../../utils";
import { Button } from "../ui/button";

import Katana from "../../../public/icons/Katana.svg";
import Dojo from "../../../public/icons/Dojo.svg";
import Origami from "../../../public/icons/Origami.svg";
import Sozo from "../../../public/icons/Sozo.svg";

export const EvervaultCard = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(20000);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "  bg-transparent aspect-square  flex items-center justify-center w-full h-full relative ",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="relative rounded-full items-center justify-center text-white font-bold">
            <h1 className="dark:text-white text-black z-20">
              {"The Provable Gaming Engine."}
            </h1>
            <h4 className="text-dojo-red-400 font-bold">
              Build games with integrity using dojo.
            </h4>

            <div className=" justify-center mt-10 grid grid-cols-2 gap-6">
              <HoverCard
                title="dojo"
                subTitle="provable, fair, and secure onchain gaming."
                id="dojo"
                colour="bg-dojo-red-400"
                icon={
                  <Dojo className="w-24 fill-dojo-red-400 group-hover:fill-dojo-blue-750 duration-500 transition-all" />
                }
              />
              <HoverCard
                title="katana"
                subTitle="blazingly fast Starknet sequencer. open-source & modular."
                id="dojo"
                colour="bg-dojo-red-400"
                icon={
                  <Katana className="w-24 fill-dojo-red-400 group-hover:fill-dojo-blue-750 duration-500 transition-all" />
                }
              />
              <HoverCard
                title="docs"
                subTitle="read the book of dojo."
                id="dojo"
                colour="bg-dojo-red-400"
                icon={
                  <Origami className="w-24 fill-dojo-red-400 group-hover:fill-dojo-blue-750 duration-500 transition-all" />
                }
              />
              <HoverCard
                title="faqs"
                subTitle="answer your questions."
                id="dojo"
                colour="bg-dojo-red-400"
                icon={
                  <Sozo className="w-24 fill-dojo-red-400 group-hover:fill-dojo-blue-750 duration-500 transition-all" />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none h-full">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-dojo-red-400 to-dojo-green opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

interface HoverCardProps {
  title: string;
  subTitle: string;
  id: string;
  colour: string;
  hoverFill?: string;
  icon?: React.ReactNode;
}

export const HoverCard = ({
  title,
  subTitle,
  id,
  colour,
  icon,
}: HoverCardProps) => {
  return (
    <div
      className={`border-blue-900 cursor-pointer  flex p-3 hover:${colour} transition-all duration-500 border-dotted border-2  relative m-4 group`}
      onClick={() =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <div className="p-2 flex space-x-5">
        {icon}

        <div>
          <h2>{title}</h2>
          <div className="text-white/70">{subTitle}</div>
        </div>
      </div>
    </div>
  );
};
