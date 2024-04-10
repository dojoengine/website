import Hero from "@/app/hero";
import { Box } from "@chakra-ui/react";
import Games from "./Games";

export default function Home() {
  return (
    <Box position="relative">
      <Hero />
      <Games />
    </Box>
  );
}
