import Hero from "@/app/hero";
import { Box } from "@chakra-ui/react";
import Games from "./games";
import { GameJam } from "./GameJam";
import { Properties } from "./properties";
import { Toolchain } from "./Toolchain";
import { Contributors } from "./contributors";
import { Footer } from "@/footer";

async function getContributors(repoName: string, page = 1) {
  let request = await fetch(
    `https://api.github.com/repos/${repoName}/contributors?per_page=100&page=${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
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
    (contributor) => contributor.avatar_url
  );

  return (
    <Box position="relative">
      <Hero />
      <Box mb={20}>
        <Games />
      </Box>
      <Box mb={40}>
        <GameJam />
      </Box>
      <Box mb="200px">
        <Properties />
      </Box>
      <Toolchain />
      <Box mb={40}>
        <Contributors contributorImages={profileImages} />
      </Box>
      <Footer />
    </Box>
  );
}
