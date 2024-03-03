import { EvervaultCard, Icon } from "../AnimatedComponents/everfault-card";
import { Button } from "../ui/button";

export const LandingSection = () => {
  return (
    <div className="h-screen p-4">
      {" "}
      <div className="border-2 border-dotted border-blue-900 h-full  relative">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <EvervaultCard text="hover" />
      </div>
    </div>
  );
};
