"use client";

import { Button } from "@/components/Button";
import {
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
    >
      <Text textStyle="title1"> Get started with our CLI:</Text>
      <Popover trigger="hover">
        <PopoverTrigger>
          <Button variant="cta" onClick={onCopy}>
            curl -L https://dojoengine.org | bash
          </Button>
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
