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
        <Button variant={"outline"} withArrow>
          <a href="https://book.dojoengine.org/">documentation</a>
        </Button>
      </div>
    </div>
  );
};

export function GetStarted() {
  const [isCopied, setCopied] = useClipboard(
    "curl -L https://dojoengine.org | bash",
    { successDuration: 2000 },
  );

  return (
    <div>
      <div className="from-36%  flex flex-col flex-wrap   items-center justify-center px-8 sm:flex-row sm:gap-12 sm:p-40">
        <Text className="my-8 self-center text-center" textStyle="title1">
          {" "}
          dojoup
        </Text>
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root open={isCopied || undefined}>
            <Tooltip.Trigger>
              <div
                onClick={setCopied}
                className="border-badge-blue/80 group relative z-0 overflow-hidden rounded-full border px-10  py-3 font-mono text-white"
              >
                <div className="to-badge-blue from-badge-blue/40 absolute inset-0 z-[-2] bg-gradient-to-t" />
                <div className="absolute bottom-0 left-0 top-0 z-[-1] w-0 bg-badge-red transition-all duration-[400ms] group-hover:w-full" />
                curl -L https://dojoengine.org | bash
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
    </div>
  );
}
