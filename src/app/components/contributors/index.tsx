import { Partners } from "./Partners";
import { GitHub } from "./GitHub";
import { Spotlight } from "@/app/components/SpotLight";

export function Contributors({
  contributorImages,
}: {
  contributorImages: string[];
}) {
  return (
    <div className="relative flex flex-col bg-gradient-to-b from-[#021531] to-[#1A1479] to-55% py-10">
      <div className="my-48">
        <Partners />
      </div>

      <GitHub contributorImages={contributorImages} />
    </div>
  );
}
