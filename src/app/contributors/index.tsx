import { Box } from "@chakra-ui/react";
import { Partners } from "./Partners";
import { GitHub } from "./GitHub";

export function Contributors() {
  return (
    <Box
      bg="linear-gradient(180deg, rgba(26,20,121,1) 0%, rgba(2,21,49,1) 55%)"
      py={10}
    >
      <Box mb="200px">
        <Partners />
      </Box>
      <GitHub />
    </Box>
  );
}
