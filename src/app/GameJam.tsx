"use client";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Text } from "@/components/Text";

export function GameJam() {
  const wrapper = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end start"],
  });

  const leftChibiY = useTransform(scrollYProgress, [0.1, 0.9], [0, -300]);
  const rightChibiY = useTransform(scrollYProgress, [0.1, 0.9], [0, 200]);

  return (
    <Container>
      <div ref={wrapper} className="flex items-center">
        <div className="w-1/2 aspect-square shrink-0 relative">
          <motion.img
            src="/images/chibi-left.png"
            alt="Left Chibi"
            style={{
              y: leftChibiY,
            }}
            className="w-4/5 absolute top-0 left-0"
          />
          <motion.img
            src="/images/chibi-right.png"
            alt="Right Chibi"
            style={{
              y: rightChibiY,
            }}
            className="w-4/5 absolute bottom-0 right-0"
          />
        </div>
        <div>
          <div className="flex gap-2 mb-4">
            <Badge
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={24}
                  fill="none"
                >
                  <path
                    fill="#03152E"
                    d="M20.981 7a.703.703 0 0 0-.684-.537h-2.945c.007-.364.003-.692-.005-.965a.928.928 0 0 0-.933-.905H8.946a.93.93 0 0 0-.935.905c-.032.273-.012.601-.003.965H5.06A.702.702 0 0 0 4.38 7c-.024.1-.573 2.479.969 4.778 1.094 1.631 2.94 2.777 5.479 3.43.546.14 1.151.65 1.151 1.214v1.729H9.642c-.387 0-.675.314-.675.701 0 .387.29.701.675.701h6.051c.388 0 .675-.314.675-.701 0-.387-.314-.701-.675-.701h-2.31V16.42c0-.564.605-1.072 1.15-1.212 2.542-.653 4.387-1.799 5.48-3.43 1.542-2.3.992-4.678.969-4.778ZM6.527 11.015c-.817-1.203-.889-2.457-.849-3.15h2.35c.156 1.743.594 3.831 1.684 5.526-1.432-.57-2.499-1.365-3.185-2.376Zm12.306 0c-.684 1.011-1.75 1.805-3.184 2.374 1.09-1.693 1.528-3.782 1.683-5.523h2.348c.015.692-.031 1.949-.847 3.15Z"
                    opacity={0.9}
                  />
                </svg>
              }
              text="10k STRK"
              color="badge-fuchsia"
            />
            <Badge
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={24}
                  fill="none"
                >
                  <path
                    fill="#03152E"
                    d="M20.981 7a.703.703 0 0 0-.684-.537h-2.945c.007-.364.003-.692-.005-.965a.928.928 0 0 0-.933-.905H8.946a.93.93 0 0 0-.935.905c-.032.273-.012.601-.003.965H5.06A.702.702 0 0 0 4.38 7c-.024.1-.573 2.479.969 4.778 1.094 1.631 2.94 2.777 5.479 3.43.546.14 1.151.65 1.151 1.214v1.729H9.642c-.387 0-.675.314-.675.701 0 .387.29.701.675.701h6.051c.388 0 .675-.314.675-.701 0-.387-.314-.701-.675-.701h-2.31V16.42c0-.564.605-1.072 1.15-1.212 2.542-.653 4.387-1.799 5.48-3.43 1.542-2.3.992-4.678.969-4.778ZM6.527 11.015c-.817-1.203-.889-2.457-.849-3.15h2.35c.156 1.743.594 3.831 1.684 5.526-1.432-.57-2.499-1.365-3.185-2.376Zm12.306 0c-.684 1.011-1.75 1.805-3.184 2.374 1.09-1.693 1.528-3.782 1.683-5.523h2.348c.015.692-.031 1.949-.847 3.15Z"
                    opacity={0.9}
                  />
                </svg>
              }
              text="$10k USD"
              color="badge-fuchsia"
            />
          </div>
          <Text textStyle="headline2" className="mb-5">
            Game Jam
          </Text>
          <Text textStyle="bodyText" className="mb-10">
            Here is a short paragraph about the details of this current event.
            Should mention location, date and time of event as well as theme.
          </Text>
          <Button variant="showArrow">Sign up</Button>
        </div>
      </div>
    </Container>
  );
}
