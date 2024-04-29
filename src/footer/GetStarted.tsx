"use client";

import { Text } from "@/components/Text";
import useClipboard from "react-use-clipboard";

import * as Tooltip from "@radix-ui/react-tooltip";

export function GetStarted() {
  const [isCopied, setCopied] = useClipboard(
    "curl -L https://dojoengine.org | bash"
  );

  return (
    <div className="flex items-center justify-center p-40 gap-12 shadow-[0_0_124px_30px_rgba(3,18,42,0.8)] bg-gradient-to-b from-[rgba(5,22,49,0)] from-36% to-[#0D1444]">
      <Text textStyle="title1"> Get started with our CLI:</Text>
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <button onClick={setCopied} className="p-[2px] relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7]"></div>
              <div className="px-8 py-2 bg-badge-red rounded-full transition-all duration-200 hover:bg-[transparent] hover:text-text-white relative text-text-black font-['IBM_Plex_Mono_SemiBold']">
                curl -L https://dojoengine.org | bash
              </div>
            </button>
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
