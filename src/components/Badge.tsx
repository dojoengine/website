import { Text } from "./Text";

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
    <div
      className={`flex items-center text-text-black w-max py-1 pr-5 pl-3 gap-2 bg-${color} rounded-full`}
    >
      {icon} <Text textStyle="badgeText">{text}</Text>
    </div>
  );
}
