"use client";

import { Text } from "@/components/Text";
import useClipboard from "react-use-clipboard";

import * as Tooltip from "@radix-ui/react-tooltip";

export function GetStarted() {
  const [isCopied, setCopied] = useClipboard(
    "curl -L https://dojoengine.org | bash",
  );

  return (
    <div className="from-36% flex items-center justify-center gap-12 bg-gradient-to-b from-[rgba(5,22,49,0)] to-[#0D1444] p-40 shadow-[0_0_124px_30px_rgba(3,18,42,0.8)]">
      <Text textStyle="title1"> Get started with our CLI:</Text>
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <div onClick={setCopied} className="group relative p-[2px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7]"></div>
              <div className="relative rounded-full bg-badge-red px-8 py-2 font-['IBM_Plex_Mono_SemiBold'] text-text-black transition-all duration-200 hover:bg-[transparent] hover:text-text-white">
                curl -L https://dojoengine.org | bash
              </div>
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
