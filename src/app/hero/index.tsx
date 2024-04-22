"use client";

import { Globe } from "./Globe";
import { Lines } from "./Lines";
import { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useMenuStore } from "../Navigation";
import { LineParticles } from "./Particles";
import { Text } from "../../components/Text";
import { Button } from "@/components/Button";

export default function Hero() {
  const wrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start start", "end end"],
  });
  const { decreasedPadding } = useMenuStore();

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    if (latest >= 1 && !decreasedPadding) {
      return useMenuStore.setState({ decreasedPadding: true });
    }

    if (latest < 1 && decreasedPadding) {
      return useMenuStore.setState({ decreasedPadding: false });
    }
  });

  return (
    <div
      className="flex items-start justify-center relative h-[200vh]"
      ref={wrapper}
    >
      <div className="flex max-w-[1400px] w-full justify-between items-center gap-20 h-screen sticky top-0">
        <LineParticles />
        <div className="flex gap-10 items-start flex-col">
          <Text textStyle="headline1" className="text-text-white">
            Let&#8217;s build provable games.
          </Text>
          <Button>Learn more</Button>
        </div>
        <div className="shrink-0">
          <Globe />
        </div>
        <Lines scrollProgress={scrollYProgress} />
      </div>
    </div>
  );
}
