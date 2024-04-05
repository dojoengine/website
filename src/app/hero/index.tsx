import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Globe } from "./Globe";

export default function Hero() {
  return (
    <Center h="100vh" alignItems="center">
      <Flex
        maxW="1400px"
        w="full"
        justifyContent="space-between"
        alignItems="center"
        gap={20}
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
      </Flex>
    </Center>
  );
}
