import { Box, Flex } from "@chakra-ui/react";

export function Container({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) {
  return (
    <Flex justifyContent="center" position="relative">
      <Box maxW="1400px" w="100%">
        {children}
      </Box>
    </Flex>
  );
}
