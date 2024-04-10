import { Flex, Text } from "@chakra-ui/react";

export function Badge({
  icon,
  text,
  color,
}: {
  icon: React.ReactNode;
  text: string;
  color: string;
}) {
  return (
    <Flex
      bg={color}
      py={1}
      pr={5}
      pl={3}
      gap={2}
      w="max-content"
      borderRadius="full"
      color="text.black"
      alignItems="center"
    >
      {icon} <Text textStyle="badgeText">{text}</Text>
    </Flex>
  );
}
