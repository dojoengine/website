import { Partners } from "./Partners";
import { GitHub } from "./GitHub";

export function Contributors({
  contributorImages,
}: {
  contributorImages: string[];
}) {
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#1A1479] to-[#021531] to-55% py-10">
      <div className="my-48">
        <Partners />
      </div>

      <GitHub contributorImages={contributorImages} />
    </div>
  );
}
