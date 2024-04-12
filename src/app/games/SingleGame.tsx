"use client";

import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function SingleGame({
  game,
}: {
  game: {
    name: string;
    logo: JSX.Element;
  };
}) {
  return (
    <motion.div
      style={{
        border: "1px solid",
        borderColor: "#4E38E1",
        borderRadius: "16px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
      whileHover={{
        backgroundColor: "#4E38E1",
      }}
    >
      {game.logo}
      <Text textStyle="title3" alignSelf="flex-start">
        {game.name}
      </Text>
    </motion.div>
  );
}
