import { Event } from "@/app/types";
import { Container } from "../Container";
import { Text } from "../Text";
import { EventCard } from "./EventCard";

export const EventRow = ({ events }: { events: Event[] }) => {
  return (
    <Container>
      <div>
        <Text className="mb-8 " textStyle="headline2">
          Upcoming events
        </Text>
      </div>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </Container>
  );
};
