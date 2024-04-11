import Hero from "@/app/hero";
import { Box } from "@chakra-ui/react";
import Games from "./Games";
import { GameJam } from "./hero/GameJam";
import { Properties } from "./Properties";

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
      <Box mb={40}>
        <Properties />
      </Box>
    </Box>
  );
}
