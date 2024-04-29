import { Partners } from "./Partners";
import { GitHub } from "./GitHub";

export function Contributors({
  contributorImages,
}: {
  contributorImages: string[];
}) {
  return (
    <div className="py-10 bg-gradient-to-b from-[#1A1479] to-[#021531] to-55%">
      <div className="mb-[200px]">
        <Partners />
      </div>
      <GitHub contributorImages={contributorImages} />
    </div>
  );
}
