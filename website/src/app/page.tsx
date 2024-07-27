import Hero from "@/app/components/hero";
import Games from "./components/games";
import { Toolchain } from "./components/Toolchain";
import { Contributors } from "./components/contributors";
import { EventRow } from "./components/events/EventRow";
import { GetStarted } from "./components/footer/GetStarted";
import { Partners } from "./components/contributors/Partners";
import { Container } from "./components/Container";
import { Text } from "./components/Text";
import { PostCardRow } from "./components/posts/PostCardRow";
import { getAllContributors, getAllEvents, getAllPosts } from "./hooks";
import { Button } from "./components/Button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="relative">
      <Hero />

      <Toolchain />

      <div className=" bg-gradient-to-b from-[#1A1479] to-[#021531] ">
        <GetStarted />
        <Games />
      </div>

      <EventRow events={await getAllEvents()} />

      <Container>
        <div className="flex justify-between">
          <Text className="mb-8 " textStyle="headline2">
            Hato
          </Text>
          <Link href={"/posts"}>
            <Button size={"lg"} withArrow variant={"outline"}>
              all writings
            </Button>
          </Link>
        </div>

        <PostCardRow posts={await getAllPosts()} />
      </Container>

      <div className="">
        <Contributors
          contributorImages={(await getAllContributors("dojoengine/dojo")).map(
            (contributor) => contributor.avatar_url,
          )}
        />
        <Partners />
      </div>
    </div>
  );
}
