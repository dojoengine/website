import { Badge } from "../Badge";
import { Button } from "../Button";
import { Text } from "../Text";

export interface Event {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;

  location: string;
  image: string;
  link: string;
}
const formatDateRange = (startDate: string, endDate: string): string => {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const formatSingleDate = (date: Date): string => {
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    return `${month} ${day < 10 ? "0" + day : day}`;
  };

  const start = new Date(startDate);
  const end = new Date(endDate);
  const formattedStart = formatSingleDate(start);
  const formattedEnd = formatSingleDate(end);

  return `${formattedStart}  —  ${formattedEnd}`;
};

export const EventCard = ({
  id,
  name,
  description,
  startDate,
  endDate,
  location,
  image,
  link,
}: Event) => {
  return (
    <div className="rounded-4xl hover:from-secondary/80 hover:to-tertiary/15  duration-250 shadow-3xl border-white/10 bg-gradient-to-b from-[#1A1479] to-[#021531]   p-6 transition-all">
      <img
        src={`/images/${image}`}
        className="mb-8 h-64 w-full rounded-3xl object-cover"
        alt=""
      />

      <Badge
        size="small"
        text={formatDateRange(startDate, endDate)}
        color="yellow"
      />

      <Text className="mb-4 mt-4" textStyle="headline3">
        {name}
      </Text>
      <p className="text-white/90">{description}</p>

      <Button className="mt-6 " variant="default">
        <a href={link}> Sign up</a>
      </Button>
    </div>
  );
};
