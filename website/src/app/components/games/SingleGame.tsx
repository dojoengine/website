"use client";

import { Button } from "@/app/components/Button";
import { Text } from "@/app/components/Text";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function SingleGame({
  game,
}: {
  game: {
    name: string;
    description: string;
    image: string;
    link: string;
  };
}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  return (
    <div className="from-bg-white/5 col-span-2 rounded-3xl border border-white/5 bg-white/5 p-3 backdrop-blur-3xl sm:col-span-1">
      <div
        className="shadow-3xl group relative aspect-square h-72 w-full cursor-pointer flex-col items-end justify-between rounded-2xl  bg-cover bg-center p-3 sm:h-96"
        style={{ backgroundImage: `url('${game.image}')` }}
      >
        <div className="absolute  inset-0 flex items-end rounded-2xl bg-black/60 transition-all  sm:top-full sm:bg-black/60 sm:group-hover:top-0" />

        <div className=" absolute top-4 flex h-full  rounded-3xl px-6 transition-all delay-0  sm:opacity-0 sm:group-hover:opacity-100 ">
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
            </motion.div>

            <motion.p
              className=""
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {game.description}
            </motion.p>

            <div className="mt-8">
              {" "}
              <a target="_blank" href={game.link}>
                <Button variant="default">play</Button>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
