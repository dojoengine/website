"use client";

import { Text } from "@/app/components/Text";
import useClipboard from "react-use-clipboard";
import { Container } from "@/app/components/Container";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Button } from "../Button";

export const ToolKit = () => {
  return (
    <div className="w-full text-center">
      <div className="text-3xl">
        an opensource toolkit for building <br /> onchain and provable games.
      </div>
      <div className="mt-8">
        <a href="https://book.dojoengine.org/">
          {" "}
          <Button variant={"outline"} withArrow>
            documentation
          </Button>
        </a>
      </div>
    </div>
  );
};

export function GetStarted() {
  const [isCopied, setCopied] = useClipboard(
    "curl -L https://install.dojoengine.org | bash",
    { successDuration: 2000 },
  );

  return (
    <Container>
      <div className=" flex flex-col items-center justify-center sm:gap-6 ">
        <Text className="my-8  self-center text-center" textStyle="headline2">
          {" "}
          Install the CLI
        </Text>

        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root open={isCopied || undefined}>
            <Tooltip.Trigger>
              <div
                onClick={setCopied}
                className="shadow-3xl group relative z-0 overflow-hidden rounded-full border  border-white/10 px-10 py-3 font-mono text-white"
              >
                <div className="absolute inset-0 z-[-2] bg-badge-blue" />
                <div className="absolute bottom-0 left-0 top-0 z-[-1] w-0 bg-background-dark transition-all duration-[20ms] group-hover:w-full" />
                curl -L https://install.dojoengine.org | bash
              </div>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <Text textStyle="overline">
                {isCopied ? "Copied!" : "Click to copy"}
              </Text>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    </Container>
  );
}
