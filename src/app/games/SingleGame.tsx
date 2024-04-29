"use client";

import { Text } from "@/components/Text";

export function SingleGame({
  game,
}: {
  game: {
    name: string;
    image: string;
  };
}) {
  return (
    <div
      className="group relative aspect-square cursor-pointer flex-col items-end justify-between rounded-[16px] border-[8px] border-[#4E38E1] bg-cover bg-center p-[24px]"
      style={{ backgroundImage: `url('${game.image}')` }}
    >
      <div className="absolute inset-0 top-full flex items-end bg-gradient-to-t from-[#4A35DA] transition-all group-hover:top-0" />
      <Text
        textStyle="title3"
        className=" absolute bottom-4 left-4 translate-y-full opacity-0 transition-all delay-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-150"
      >
        {game.name}
      </Text>
    </div>
  );
}
