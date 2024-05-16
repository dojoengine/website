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

  return (
    <div className="relative">
      <Hero />
      {/* <GetStarted /> */}
      <Toolchain />

      <div className=" bg-gradient-to-b from-[#1A1479] to-[#021531] ">
        {/* <ToolKit /> */}
        <GetStarted />
        <Games />
      </div>

      <EventRow />

      {/* 
      <div className="mb-[200px]">
        <Properties />
      </div> */}

      <div className="">
        <Contributors contributorImages={profileImages} />
      </div>
      {/* <GetStarted /> */}
      <Partners />

      <Footer />
    </div>
  );
}
