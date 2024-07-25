import { Partners } from "./Partners";
import { GitHub } from "./GitHub";
import { Spotlight } from "@/app/components/SpotLight";

export function Contributors({
  contributorImages,
}: {
  contributorImages: string[];
}) {
  return (
    <div className=" relative flex  flex-col to-55% sm:py-16">
      <GitHub contributorImages={contributorImages} />
    </div>
  );
}
