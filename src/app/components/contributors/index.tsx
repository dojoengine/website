import { Partners } from "./Partners";
import { GitHub } from "./GitHub";
import { Spotlight } from "@/app/components/SpotLight";

export function Contributors({
  contributorImages,
}: {
  contributorImages: string[];
}) {
  return (
    <div className="relative flex flex-col bg-gradient-to-b from-[#021531] to-[#1A1479] to-55% sm:py-10">
      <GitHub contributorImages={contributorImages} />
    </div>
  );
}
