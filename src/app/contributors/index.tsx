import { Partners } from "./Partners";
import { GitHub } from "./GitHub";
import { Spotlight } from "@/components/SpotLight";

export function Contributors({
  contributorImages,
}: {
  contributorImages: string[];
}) {
  return (
    <div className="relative flex flex-col bg-gradient-to-b from-[#1A1479] to-[#021531] to-55% py-10">
      <Spotlight className=" left-0 top-1/2 md:left-60" fill="white" />
      <div className="my-48">
        <Partners />
      </div>

      <GitHub contributorImages={contributorImages} />
    </div>
  );
}
