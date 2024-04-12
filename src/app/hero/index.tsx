"use client";

import { Box, Button, Center, Flex, Text, VStack } from "@chakra-ui/react";
import { Globe } from "./Globe";
import { Lines } from "./Lines";
import { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useMenuStore } from "../Navigation";
import { LineParticles } from "./Particles";

export default function Hero() {
  const wrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start start", "end end"],
  });
  const { decreasedPadding } = useMenuStore();

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    if (latest >= 1 && !decreasedPadding) {
      return useMenuStore.setState({ decreasedPadding: true });
    }

    if (latest < 1 && decreasedPadding) {
      return useMenuStore.setState({ decreasedPadding: false });
    }
  });

  return (
    <Flex
      h="200vh"
      alignItems="flex-start"
      justifyContent="center"
      position="relative"
      ref={wrapper}
    >
      <Center
        maxW="1400px"
        w="full"
        justifyContent="space-between"
        alignItems="center"
        gap={20}
        h="100vh"
        position="sticky"
        top={0}
      >
        <LineParticles />
        <VStack spacing={10} alignItems="flex-start">
          <Text color="text.white" textStyle="headline1">
            Let&#8217;s build provable games.
          </Text>
          <Button>Learn more</Button>
        </VStack>
        <Box flexShrink={0}>
          <Globe />
        </Box>
        <Lines scrollProgress={scrollYProgress} />
      </Center>
    </Flex>
  );
}
