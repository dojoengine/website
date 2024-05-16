import { Container } from "../Container";
import { Text } from "../Text";
import { Event, EventCard } from "./EventCard";

const events: Event[] = [
  {
    id: "string",
    name: "Summer Game Jam 2024",
    description: "Join the game jam and earn prizes.",
    startDate: "2023-10-01",
    endDate: "2023-10-11",
    location: "string",
    image: "string",
    link: "string",
  },
  {
    id: "string",
    name: "Summer Game Jam 2024",
    description:
      "Here is a medium length paragraph about this feature and maybe an extra line.",
    startDate: "2023-10-01",
    endDate: "2023-10-11",
    location: "string",
    image: "string",
    link: "string",
  },
];

export const EventRow = () => {
  return (
    <Container>
      <div>
        <Text className="mb-8" textStyle="headline2">
          upcoming events
        </Text>
      </div>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </Container>
  );
};
