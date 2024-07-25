import Hero from "@/app/components/hero";
import Games from "./components/games";
import { GameJam } from "./components/GameJam";
import { Properties } from "./components/properties";
import { Toolchain } from "./components/Toolchain";
import { Contributors } from "./components/contributors";
import { Footer } from "@/app/components/footer";
import { EventRow } from "./components/events/EventRow";
import { GetStarted, ToolKit } from "./components/footer/GetStarted";
import { Partners } from "./components/contributors/Partners";
import { Container } from "./components/Container";
import { Text } from "./components/Text";
import { PostCardRow } from "./components/posts/PostCardRow";
import { getAllPosts } from "./hooks";

async function getContributors(repoName: string, page = 1) {
  let request = await fetch(
    `https://api.github.com/repos/${repoName}/contributors?per_page=100&page=${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  let contributorsList = await request.json();
  return contributorsList;
}

async function getAllContributors(repoName: string) {
  let contributors: { avatar_url: string }[] = [];
  let page = 1;

  while (true) {
    const list = await getContributors(repoName, page);
    if (list.length === 0) {
      break;
    }
    contributors = contributors.concat(list);
    page++;
  }

  return contributors;
}

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
