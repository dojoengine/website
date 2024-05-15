import { Text } from "./Text";

export function Badge({
  icon,
  text,
  color,
  size = "large", // default size
  textColor = "black", // default text color
}: {
  icon?: React.ReactNode;
  text: string;
  color: "blue" | "red" | "yellow"; // color prop with predefined options
  size?: "small" | "medium" | "large"; // size prop with predefined options
  textColor?: "black" | "white"; // text color prop with predefined options
}) {
  // Define size classes
  const sizeClasses = {
    small: "py-0.5 pl-2 pr-3 text-sm rounded",
    medium: "py-1 pl-3 pr-5 text-base",
    large: "py-1 pl-4 pr-6 text-lg rounded-full",
  };

  const colors = {
    blue: "bg-badge-blue",
    red: "bg-badge-red",
    yellow: "bg-badge-yellow",
  };

  const textColors = {
    black: "text-black",
    white: "text-white",
  };

  return (
    <div
      className={`${textColors[textColor]} flex w-max items-center gap-2 ${colors[color]} ${sizeClasses[size]}`}
    >
      {icon} <Text textStyle="badgeText">{text}</Text>
    </div>
  );
}
