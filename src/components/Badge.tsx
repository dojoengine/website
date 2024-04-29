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
      className={`flex w-max items-center gap-2 py-1 pl-3 pr-5 text-text-black bg-${color} rounded-full`}
    >
      {icon} <Text textStyle="badgeText">{text}</Text>
    </div>
  );
}
