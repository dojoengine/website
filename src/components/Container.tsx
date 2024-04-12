"use client";

import { Box, Flex } from "@chakra-ui/react";
import { ForwardedRef, forwardRef } from "react";

export const Container = forwardRef(function Container(
  {
    children,
  }: {
    children: React.ReactNode[] | React.ReactNode;
  },
  ref: ForwardedRef<HTMLDivElement | null>
) {
  return (
    <Flex justifyContent="center" position="relative" ref={ref}>
      <Box maxW="1400px" w="100%">
        {children}
      </Box>
    </Flex>
  );
});
