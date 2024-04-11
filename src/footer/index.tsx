import { GetStarted } from "@/footer/GetStarted";
import { Box } from "@chakra-ui/react";
import { Links } from "./Links";

export function Footer() {
  return (
    <Box bg="background.purple">
      <GetStarted />
      <Links />
    </Box>
  );
}
