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
  return (
    <Container>
      <Wave />
      <div className="relative sm:px-0 ">
        <motion.div className="grid grid-cols-1 gap-8 rounded-3xl  border border-white/10 bg-gradient-to-b from-[#1A1479] to-[#021531] p-8   shadow-2xl sm:grid-cols-2 sm:gap-16">
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
    </Container>
  );
}
