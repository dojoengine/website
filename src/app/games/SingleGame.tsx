"use client";

import { Text } from "@/components/Text";

export function SingleGame({
  game,
}: {
  game: {
    name: string;
    logo: JSX.Element;
  };
}) {
  return (
    <div className="flex flex-col items-end justify-between rounded-[16px] border-[1px] border-[#4E38E1] p-[24px] hover:bg-[#4E38E1]">
      {game.logo}
      <Text textStyle="title3" className="self-start">
        {game.name}
      </Text>
    </div>
  );
}
