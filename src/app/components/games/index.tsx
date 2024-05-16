"use client";

import { Wave } from "./Wave";
import { Badge } from "@/app/components/Badge";
import { Container } from "@/app/components/Container";
import { SingleGame } from "./SingleGame";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Text } from "@/app/components/Text";
import { Button } from "../Button";

const allGames = [
  {
    name: "Eykar",
    image: "/images/games/game1.png",
    description:
      "A game about building worlds.A game about building worlds.A game about building worlds.A game about building worlds",
  },
  {
    name: "Eykar",
    image: "/images/games/game2.png",
    description:
      "A game about building worlds.A game about building worlds.A game about building worlds.A game about building worlds",
  },
  {
    name: "Eykar",
    image: "/images/games/game3.png",
    description:
      "A game about building worlds.A game about building worlds.A game about building worlds.A game about building worlds",
  },
  {
    name: "Eykar",
    image: "/images/games/game4.png",
    description:
      "A game about building worlds.A game about building worlds.A game about building worlds.A game about building worlds",
  },
  // {
  //   name: "Eykar",
  //   image: "/images/games/game5.png",
  // },
  // {
  //   name: "Eykar",
  //   image: "/images/games/game6.png",
  // },
  // {
  //   name: "Eykar",
  //   image: "/images/games/game7.png",
  // },
  // {
  //   name: "Eykar",
  //   image: "/images/games/game8.png",
  // },
];

export default function Games() {
  const wrapper = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start center", "end end"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const gamesTranslate = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <Container>
      {/* <Wave /> */}
      <div className="relative px-8 sm:px-0 " ref={wrapper}>
        {/* <div className="sticky  flex flex-col items-center  sm:flex-row"> */}
        {/* <motion.div
            style={{ opacity: textOpacity }}
            className="mb-10 basis-[30%] sm:mb-0 sm:px-8"
          >
            <div className="mb-7">
              <Badge
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={24}
                    fill="none"
                  >
                    <path
                      fill="#03152E"
                      d="M16.145 7.526a3.468 3.468 0 0 1-2.475 3.323v3.112h-1.98V10.85a3.466 3.466 0 1 1 4.455-3.323Zm-4.207-.495a.74.74 0 0 0 .742-.742.74.74 0 0 0-.742-.743.74.74 0 0 0-.743.743.74.74 0 0 0 .742.742Zm-4.208 7.92a.989.989 0 1 1 1.98 0h7.92c1.092 0 1.98.888 1.98 1.98v.99c0 1.092-.888 1.98-1.98 1.98h-9.9a1.982 1.982 0 0 1-1.98-1.98v-.99c0-1.092.888-1.98 1.98-1.98Z"
                    />
                  </svg>
                }
                text="On Dojo"
                color="red"
              />
            </div>
            <Text textStyle="headline2">build</Text>
            <Text textStyle="bodyText">
              Build provable worlds with dojo using zk STARKs.
            </Text>
          </motion.div> */}
        <motion.div
          // style={{
          //   x: gamesTranslate,
          //   left: gamesTranslate,
          // }}
          className="grid grid-cols-1 gap-16  rounded-2xl border border-white/10 bg-gradient-to-b from-[#1A1479] to-[#021531]   p-8 shadow-2xl sm:grid-cols-2"
        >
          <div className="col-span-2 flex justify-between">
            <Text textStyle="headline2">see live worlds</Text>
            <Button withArrow variant={"outline"}>
              view more
            </Button>
          </div>

          {allGames.map((game, i) => (
            <SingleGame key={i} game={game} />
          ))}
        </motion.div>
      </div>
      {/* </div> */}
    </Container>
  );
}
