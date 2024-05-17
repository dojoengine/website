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
    name: "Primeforce Heros",
    image: "/images/games/game1.png",
    description:
      "A rogue like onchain game inspired by the heros of might and magic series.",
    link: "https://forceprime.io/",
  },
  {
    name: "Eternum",
    image: "/images/games/eternum.jpeg",
    description:
      "A grand high stakes onchain MMO. Build resources, fight over Realms and rule the world.",
    link: "https://eternum.realms.world/",
  },
  {
    name: "Roll Your Own",
    image: "/images/games/ryo.png",
    description:
      "Buy low and sell high. A game based on the classic TI-83 calculator game.",
    link: "https://ryo.game/",
  },
  {
    name: "Paved",
    image: "/images/games/paved.png",
    description:
      "Paved tiles in a complex and challenging onchain puzzle game. Compete daily for the top score.",
    link: "https://sepolia.paved.gg/",
  },
];

export default function Games() {
  return (
    <Container>
      <Wave />
      <div className="relative sm:px-0 ">
        <motion.div className="grid grid-cols-1 gap-8 rounded-3xl     sm:grid-cols-2 sm:gap-16">
          <div className="col-span-2 flex justify-between capitalize">
            <Text className="" textStyle="headline2">
              onchain worlds
            </Text>
            <Button size={"lg"} withArrow variant={"default"}>
              <a href="https://github.com/dojoengine/awesome-dojo">view more</a>
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
