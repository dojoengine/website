import { Box } from "@chakra-ui/react";
import { MotionValue, useTransform, motion } from "framer-motion";

const lineProps = [
  {
    opacity: 0.8,
    translateY: "-48px",
  },
  {
    opacity: 0.8,
    translateY: "-16px",
  },
  {
    opacity: 0.5,
    translateY: "16px",
  },
  {
    opacity: 0.2,
    translateY: "48px",
  },
];

export function Lines({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  const line1Length = useTransform(scrollProgress, [0, 1], [0, 1]);
  const line2Length = useTransform(scrollProgress, [0.1, 1], [0, 1]);
  const line3Length = useTransform(scrollProgress, [0.2, 1], [0, 1]);
  const line4Length = useTransform(scrollProgress, [0.3, 1], [0, 1]);

  const lineLengths = [line1Length, line2Length, line3Length, line4Length];

  return (
    <>
      {lineProps.map((line, i) => (
        <Box
          as="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1512 313"
          fill="none"
          position="absolute"
          zIndex={-1}
          left={0}
          right={0}
          bottom="20%"
          transform={`translateY(${line.translateY})`}
          key={i}
        >
          <motion.path
            stroke="url(#lineGradient)"
            d="M-.63 152.876c289.754 115.656 716.014 233.831 616.95 99.667C440.254 14.093 913.579 1.233 1163.67 1.233c101.38 0 229.81 37.43 347.99 83.752"
            opacity={line.opacity}
            initial={{
              pathLength: 0,
            }}
            style={{
              pathLength: lineLengths[i],
            }}
          />
          {i === 0 && (
            <defs>
              <linearGradient
                id="lineGradient"
                x1={-207.701}
                x2={1794.7}
                y1={142.996}
                y2={142.996}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0.1} stopColor="#021531" />
                <stop offset={0.311} stopColor="#7197F9" />
                <stop offset={0.66} stopColor="#B374C1" />
                <stop offset={0.866} stopColor="#021531" />
                <stop offset={1} stopColor="#2FEAEA" />
              </linearGradient>
            </defs>
          )}
        </Box>
      ))}
    </>
  );
}
