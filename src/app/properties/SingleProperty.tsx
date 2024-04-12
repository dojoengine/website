import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
