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
    <div className="border-[1px] border-[#4E38E1] rounded-[16px] p-[24px] flex flex-col justify-between items-end hover:bg-[#4E38E1]">
      {game.logo}
      <Text textStyle="title3" className="self-start">
        {game.name}
      </Text>
    </div>
  );
}
