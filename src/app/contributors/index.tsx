import { Partners } from "./Partners";
import { GitHub } from "./GitHub";

export function Contributors({
  contributorImages,
}: {
  contributorImages: string[];
}) {
  return (
    <div className="bg-gradient-to-b from-[#1A1479] to-[#021531] to-55% py-10">
      <div className="mb-[200px]">
        <Partners />
      </div>
      <GitHub contributorImages={contributorImages} />
    </div>
  );
}
