"use client";

import {
  Box,
  Center,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useClipboard,
} from "@chakra-ui/react";

export function GetStarted() {
  const { onCopy, hasCopied } = useClipboard(
    "curl -L https://dojoengine.org | bash"
  );

  return (
    <Center
      bg="linear-gradient(180deg, rgba(5, 22, 49, 0) 36.81%, #0D1444 97.7%)"
      p={40}
      gap={12}
      boxShadow="rgba(3, 18, 42, 0.8) 0px 0px 124px 30px"
    >
      <Text textStyle="title1"> Get started with our CLI:</Text>
      <Popover trigger="hover">
        <PopoverTrigger>
          <Box as="button" p={0.5} position="relative" onClick={onCopy}>
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to right, #6366f1 ,#a855f7)"
              borderRadius="full"
            ></Box>
            <Box
              px={8}
              py={2}
              bg="badge.red"
              borderRadius="full"
              transition="all 0.2s"
              _hover={{ bg: "transparent", color: "text.white" }}
              position="relative"
              color="text.black"
              fontFamily="IBM Plex Mono SemiBold"
            >
              curl -L https://dojoengine.org | bash
            </Box>
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <Text textStyle="overline">
            {hasCopied ? "Copied!" : "Click to copy"}
          </Text>
        </PopoverContent>
      </Popover>
    </Center>
  );
}
