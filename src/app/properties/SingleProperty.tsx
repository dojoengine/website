"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function round(num: number, fix = 2) {
  return parseFloat(num.toFixed(fix));
}

export function distance(x1: number, y1: number, x2: number, y2: number) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

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
  const [mousePosition, setRotations] = useState<{
    x: number;
    y: number;
    z: number;
  }>();

  useEffect(() => {}, []);

  return (
    <Flex
      borderRadius={16}
      p={6}
      flexDir="column"
      justifyContent="space-between"
      alignItems="flex-end"
      aspectRatio="409 / 279"
      bg="url('/images/tile-bg.png')"
      bgSize={gridSize}
      bgPos={property.bgPos}
      position="relative"
      cursor="pointer"
      onMouseMove={(e) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        const absolute = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };

        const percent = {
          x: round((100 / rect.width) * absolute.x),
          y: round((100 / rect.height) * absolute.y),
        };

        const center = {
          x: percent.x - 50,
          y: percent.y - 50,
        };

        setRotations({
          x: round(((center.x > 50 ? 1 : -1) * center.x) / 3),
          y: round(center.y / 3),
          z: round(distance(percent.x, percent.y, 50, 50)),
        });
      }}
      transform={`rotateX(${mousePosition?.x || 0}deg) rotateY(${
        mousePosition?.y || 0
      }deg)`}
      onMouseLeave={() => {
        setRotations({
          x: 0,
          y: 0,
          z: 0,
        });
      }}
      sx={{
        transformStyle: "preserve-3d",
      }}
    >
      <Box zIndex={5}>{property.icon}</Box>
      <Text textStyle="title3" alignSelf="flex-start">
        {property.name}
      </Text>
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          borderRadius: "16px",
          background: "url('/images/tile-bg.png')",
          backgroundSize: gridSize,
          backgroundPosition: property.bgPos,
          maskImage:
            "radial-gradient(ellipse 0% 0% at 50% 50%, black 100%, transparent 50%)",
          display: "flex",
          alignItems: "flex-end",
          padding: "24px",
        }}
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
    </Flex>
  );
}
