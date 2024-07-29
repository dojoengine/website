import { Event } from "@/app/types";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Text } from "../Text";
import Link from "next/link";
import { formatDateRange } from "../lib/utils";

export const EventCard = ({ event }: { event: Event }) => {
  return (
    <Link href={`/events/${event.slug}`}>
      <div className="duration-250 shadow-3xl rounded-3xl  border border-white/10 bg-gradient-to-b from-[#1A1479] to-[#021531] p-3 transition-all   hover:from-secondary/80 hover:to-tertiary/15">
        <img
          src={process.env.NEXT_PUBLIC_PAYLOAD_CMS + event.coverImage.url!}
          className="mb-4 h-64 w-full rounded-2xl border border-white/10 object-cover"
          alt=""
        />

        <div className="p-3">
          <Badge
            size="small"
            text={formatDateRange(event.dateFrom, event.dateTo)}
            color="yellow"
          />

          <Text className="mb-4 mt-4" textStyle="headline3">
            {event.title}
          </Text>
          <p>{event.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};
