import Hero from "@/app/hero";
import { Box } from "@chakra-ui/react";
import Games from "./Games";
import { GameJam } from "./hero/GameJam";

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
    </Box>
  );
}
