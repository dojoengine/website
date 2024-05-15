"use client";

import { Text } from "@/app/components/Text";
import useClipboard from "react-use-clipboard";
import { Container } from "@/app/components/Container";
import * as Tooltip from "@radix-ui/react-tooltip";

export function GetStarted() {
  const [isCopied, setCopied] = useClipboard(
    "curl -L https://dojoengine.org | bash",
    { successDuration: 2000 },
  );

  return (
    <div className="from-36% flex flex-col items-center justify-center  bg-gradient-to-t from-[#05163100] to-[#061732] px-8 sm:flex-row sm:gap-12 sm:p-40">
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
  );
}
