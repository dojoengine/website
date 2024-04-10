import { Box, Button, Center, Flex, Text, VStack } from "@chakra-ui/react";
import { Globe } from "./Globe";
import { Lines } from "./Lines";

export default function Hero() {
  return (
    <Flex
      h="100vh"
      alignItems="flex-start"
      justifyContent="center"
      position="relative"
      id="#hero"
      overflow="hidden"
    >
      <Center
        maxW="1400px"
        w="full"
        justifyContent="space-between"
        alignItems="center"
        gap={20}
        id="inner-hero"
        h="100vh"
      >
        <VStack spacing={10} alignItems="flex-start">
          <Text color="text.white" textStyle="headline1">
            Let&#8217;s build provable games.
          </Text>
          <Button>Learn more</Button>
        </VStack>
        <Box flexShrink={0}>
          <Globe />
        </Box>
        <Lines />
      </Center>
    </Flex>
  );
}
