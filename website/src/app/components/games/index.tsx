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
    name: "Force Prime Heroes",
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
    name: "Dope Wars",
    image: "/images/games/ryo.png",
    description:
      "Prove you're the ultimate hustler. Move product, stack paper, and rise to the top in Dope Wars. Play now and claim your spot on the leaderboard!",
    link: "https://dopewars.game",
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
          <div className="col-span-2 flex flex-col justify-between capitalize sm:flex-row">
            <Text
              className="mb-6 text-center sm:mb-0 sm:text-left"
              textStyle="headline2"
            >
              onchain worlds
            </Text>
            <a href="https://github.com/dojoengine/awesome-dojo">
              <Button size={"lg"} withArrow variant={"outline"}>
                view more
              </Button>
            </a>
          </div>

          {allGames.map((game, i) => (
            <SingleGame key={i} game={game} />
          ))}
        </motion.div>
      </div>
    </Container>
  );
}
