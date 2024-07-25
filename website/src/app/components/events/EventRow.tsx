import { Container } from "../Container";
import { Text } from "../Text";
import { Event, EventCard } from "./EventCard";

const events: Event[] = [
  // {
  //   id: "string",
  //   name: "Summer Game Jam 2024",
  //   description: "Join the game jam and earn prizes.",
  //   startDate: "2023-10-01",
  //   endDate: "2023-10-11",
  //   location: "string",
  //   image: "background.png",
  //   link: "string",
  // },
  {
    id: "string",
    name: "NYC Sensei Residency",
    description:
      "Join us this summer for the Dojo Sensei Residency Program in New York City from August 5th to September 28th 🥷",
    startDate: "2023-8-04",
    endDate: "2023-10-01",
    location: "string",
    image: "nyc.jpeg",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdsCYDCC7VzpDoHKpWNBeUlz5Zg46WLpM2e6bYdKJsY0yRSIw/viewform",
  },
];

export const EventRow = () => {
  return (
    <Container>
      <div>
        <Text className="mb-8 " textStyle="headline2">
          Upcoming events
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
