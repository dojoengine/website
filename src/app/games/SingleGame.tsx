"use client";

import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function SingleGame({
  game,
}: {
  game: {
    name: string;
    description: string;
    image: string;
  };
}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  return (
    <div
      className="shadow-3xl group relative aspect-square h-32 w-32 cursor-pointer flex-col items-end justify-between rounded-3xl border-8 border-[#4E38E1] bg-cover bg-center sm:h-56 sm:w-[500px]"
      style={{ backgroundImage: `url('${game.image}')` }}
    >
      <div className="absolute inset-0 top-full flex items-end rounded-2xl bg-black/60 transition-all group-hover:top-0" />

      <div className=" absolute left-6 top-4 flex h-full  rounded-3xl opacity-0 transition-all delay-0  group-hover:opacity-100 ">
        <div className="self-center">
          <motion.div
            className="mb-4 flex"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Text className="mr-4 self-center " textStyle="title3">
              {game.name}
            </Text>
            <Button variant="showArrow" size="small">
              play game
            </Button>
          </motion.div>

          <motion.p
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {game.description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
