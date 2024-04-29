"use client";

import { motion } from "framer-motion";
import { Tilt } from "@jdion/tilt-react";
import { Text } from "@/components/Text";

export function SingleProperty({
  property,
  gridSize,
}: {
  property: {
    name: string;
    icon: JSX.Element;
    bgPos: string;
  };
  gridSize: string;
}) {
  return (
    <Tilt>
      <div
        className={`relative flex aspect-[409/279] cursor-pointer flex-col items-end justify-between rounded-[16px] p-6`}
        style={{
          backgroundImage: "url('/images/tile-bg.png')",
          backgroundPosition: property.bgPos,
          backgroundSize: gridSize,
        }}
      >
        <div className="z-5">{property.icon}</div>
        <Text textStyle="title3" className="self-start">
          {property.name}
        </Text>
        <motion.div
          style={{
            background: "url('/images/tile-bg.png')",
            backgroundSize: gridSize,
            backgroundPosition: property.bgPos,
            maskImage:
              "radial-gradient(ellipse 0% 0% at 50% 50%, black 100%, transparent 50%)",
          }}
          className="absolute inset-0 flex items-end rounded-[16px] p-6"
          whileHover={{
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black 100%, transparent 50%)",
          }}
        >
          <Text textStyle="bodyText">
            Here is a medium length paragraph about this feature and maybe an
            extra line.
          </Text>
        </motion.div>
      </div>
    </Tilt>
  );
}
