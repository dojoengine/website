import Hero from "@/app/hero";
import { Box } from "@chakra-ui/react";
import Games from "./Games";
import { GameJam } from "./hero/GameJam";
import { Properties } from "./Properties";
import { Toolchain } from "./Toolchain";
import { Contributors } from "./contributors";

export default function Home() {
  return (
    <Box position="relative">
      <Hero />
      <Box mb={20}>
        <Games />
      </Box>
      <Box mb={40}>
        <GameJam />
      </Box>
      <Box mb="200px">
        <Properties />
      </Box>
      <Toolchain />
      <Box mb={40}>
        <Contributors />
      </Box>
    </Box>
  );
}
