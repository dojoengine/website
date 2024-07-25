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
import { getAllContributors, getAllPosts } from "./hooks";

export default async function Home() {
  const contributors = await getAllContributors("dojoengine/dojo");

  const profileImages = contributors.map(
    (contributor) => contributor.avatar_url,
  );

  const posts = await getAllPosts();

  return (
    <div className="relative">
      <Hero />

      <Toolchain />

      <div className=" bg-gradient-to-b from-[#1A1479] to-[#021531] ">
        <GetStarted />
        <Games />
      </div>

      <EventRow />

      <Container>
        <div>
          <Text className="mb-8 " textStyle="headline2">
            Sensei Blog
          </Text>
        </div>
        <PostCardRow posts={posts} />
      </Container>

      <div className="bg-gradient-to-b from-[#021531] to-[#1A1479]">
        <Contributors contributorImages={profileImages} />
        <Partners />
      </div>
    </div>
  );
}
