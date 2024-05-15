"use client";

import { Badge } from "@/app/components/Badge";
import { Button } from "@/app/components/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Text } from "@/app/components/Text";
import { useInView } from "react-intersection-observer";

const tools = [
  {
    name: "Saya",
    badgeTitle: "Sequencer",
    description:
      "Here is a short paragraph about the details of this product or tool. It should be relatively short and concise, maybe 2 sentences and three lines long maximum.",
    documentation: "https://book.dojoengine.org/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        fill="none"
        className="w-8 sm:w-24"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M190.572 205.374a55.684 55.684 0 0 1-49.811 15.593l-51.88-9.675-10.768-51.719a55.686 55.686 0 0 1 14.802-50.052l16.653-16.983a55.686 55.686 0 0 1 49.811-15.593l51.88 9.676 10.768 51.718a55.689 55.689 0 0 1-14.802 50.052l-16.653 16.983Zm-88.91-103.953 79.781 15.634 17.035 79.436-79.781-15.634-17.035-79.436Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          d="M150.179 168.366c-10.592 0-19.179-8.589-19.179-19.183 0-10.595 8.587-19.183 19.179-19.183 10.592 0 19.178 8.588 19.178 19.183 0 10.594-8.586 19.183-19.178 19.183Z"
        />
      </svg>
    ),
  },
  {
    name: "Torii",
    badgeTitle: "Sequencer",
    description:
      "Here is a short paragraph about the details of this product or tool. It should be relatively short and concise, maybe 2 sentences and three lines long maximum.",
    documentation: "https://book.dojoengine.org/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        fill="none"
        className="w-8 sm:w-24"
      >
        <path
          fill="#fff"
          d="M96.143 110.763 116.716 80c1.746 2.63 3.981 5.064 6.66 7.209 7.096 5.683 16.722 8.876 26.758 8.876 10.037 0 19.662-3.193 26.759-8.876 2.37-1.898 5.058-4.922 6.702-7.209l19.717 31.38c-14.317 10.708-33.175 16.72-52.821 16.792h60.568a6.52 6.52 0 0 1 5.419 2.895l19.613 29.327H63.909l18.67-29.213a6.519 6.519 0 0 1 5.493-3.009h61.706c-20.021-.074-39.222-6.315-53.635-17.409ZM98.808 181.884V220h32.605v-55.84c-25.933.011-31.577 9.759-32.606 17.724ZM203.163 181.926c-1.014-7.972-6.632-17.753-32.606-17.765V220h32.605l.001-38.074Z"
        />
      </svg>
    ),
  },
  {
    name: "Katana",
    badgeTitle: "Sequencer",
    description:
      "Here is a short paragraph about the details of this product or tool. It should be relatively short and concise, maybe 2 sentences and three lines long maximum.",
    documentation: "https://book.dojoengine.org/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        fill="none"
        className="w-8 sm:w-24"
      >
        <path
          fill="#fff"
          d="m144.429 70 15.777 78.128.006-.007 78.121 16.13-14.059 13.936a39.347 39.347 0 0 1-35.306 10.662l-56.962-11.22L186.34 230h-50.269l-74.404-71.919 21.658-21.942a3.935 3.935 0 0 1 5.53-.07l41.731 40.193-10.971-57.005a39.349 39.349 0 0 1 10.816-35.259L144.429 70Z"
        />
        <path
          fill="#fff"
          d="M191.419 136.173c-10.592 0-19.179-8.589-19.179-19.183 0-10.595 8.587-19.183 19.179-19.183 10.592 0 19.178 8.588 19.178 19.183 0 10.594-8.586 19.183-19.178 19.183Z"
        />
      </svg>
    ),
  },
  {
    name: "Origami",
    badgeTitle: "Sequencer",
    description:
      "Here is a short paragraph about the details of this product or tool. It should be relatively short and concise, maybe 2 sentences and three lines long maximum.",
    documentation: "https://book.dojoengine.org/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        fill="none"
        className="w-8 sm:w-24"
      >
        <path
          fill="#fff"
          d="M149.695 178.375 50 85.709h59.389a42.02 42.02 0 0 1 27.198 9.99l66.247 56.255-25.924 25.924c-7.46 7.461-19.487 7.68-27.215.497ZM204.565 150.225l-22.968-19.9c-7.683-6.656-7.745-18.556-.131-25.291l23.099-20.435v65.626ZM146.217 178.993l-22.322-21.101v70.07l22.103-20.266c8.388-7.692 8.489-20.885.219-28.703ZM206.806 84.038v20.965c0 12.277 9.952 22.229 22.229 22.229H250l-43.194-43.194Z"
        />
      </svg>
    ),
  },
  {
    name: "Sozo",
    badgeTitle: "Sequencer",
    description:
      "Here is a short paragraph about the details of this product or tool. It should be relatively short and concise, maybe 2 sentences and three lines long maximum.",
    documentation: "https://book.dojoengine.org/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        fill="none"
        className="w-8 sm:w-24"
      >
        <path
          fill="#fff"
          d="M119.351 98.675a69.09 69.09 0 0 0 6.476 57.607l.051-.033 20.134 27.685-1.212.746c-6.162-7.591-13.846-11.871-20.923-14.138a44.698 44.698 0 0 0-10.629-1.33l-36.47-.234 25.554 35.377a43.178 43.178 0 0 0 34.733 17.896l36.3.228.016.021 8.525-26.315a60.454 60.454 0 0 0-8.616-54.181l-15.475-21.428-3.39-4.484 1.197-.768c8.394 9.956 19.377 14.034 27.979 15.335 1.014.074 2.037.114 3.068.121l36.553.241-25.564-35.391a43.181 43.181 0 0 0-34.727-17.896L126.39 77.5h.001l-7.04 21.175Z"
        />
      </svg>
    ),
  },
];

type Direction = "up" | "down";

const variants = {
  initial: (direction: Direction) => {
    return {
      y: direction === "up" ? 300 : -300,
      opacity: 0,
    };
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: Direction) => {
    return {
      y: direction === "up" ? -300 : 300,
      opacity: 0,
    };
  },
};

export function Toolchain() {
  const [selectionTop, setSelectionTop] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("down");

  const selectedTool = tools[selectedIndex];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative flex flex-wrap items-center justify-center overflow-hidden px-6 pb-24">
      <motion.div
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full text-center"
      >
        <Text textStyle="headline2">
          A complete e2e toolkit <br /> for onchain games.
        </Text>
      </motion.div>

      <div
        style={{
          borderImageSource:
            "linear-gradient(180deg, rgba(100, 82, 222, 0.28) 0%, #151768 100%)",
        }}
        className="border-gradient relative w-full max-w-[1044px] rounded-[40px] border-[1px] bg-gradient-to-b from-[rgba(50,28,193,0.03)] to-[rgba(43,24,164,0.31)] p-6 shadow-[0_0_114px_0_#03122ACC] sm:p-14 sm:pl-24"
      >
        <div className="flex flex-col items-center gap-12 sm:flex-row sm:gap-32">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={selectedTool.name}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 200, damping: 20 },
                opacity: { duration: 0.1 },
              }}
              custom={direction}
              className="z-[5] order-2 flex flex-col items-start sm:order-1"
            >
              <div className="mb-4 sm:mb-10">
                <Badge
                  text={selectedTool.badgeTitle}
                  color="red"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      fill="none"
                    >
                      <path
                        fill="#03152E"
                        d="M4.76 7.573c0-1.092.888-1.98 1.98-1.98h11.88c1.092 0 1.98.888 1.98 1.98v9.9c0 1.092-.888 1.98-1.98 1.98H6.74a1.982 1.982 0 0 1-1.98-1.98v-9.9Zm9.102 2.225a.74.74 0 0 0 .055 1.048l1.86 1.677-1.863 1.677a.74.74 0 0 0-.056 1.049.74.74 0 0 0 1.05.056l2.474-2.228a.743.743 0 0 0 0-1.101l-2.475-2.228a.74.74 0 0 0-1.049.056l.004-.006Zm-2.417 1.048a.74.74 0 0 0 .056-1.048.74.74 0 0 0-1.049-.056l-2.475 2.227a.743.743 0 0 0 0 1.101l2.475 2.228a.74.74 0 0 0 1.049-.055.74.74 0 0 0-.056-1.05l-1.862-1.67 1.862-1.677Z"
                      />
                    </svg>
                  }
                />
              </div>
              <Text textStyle="headline1" className="mb-4 sm:mb-10">
                {selectedTool.name}
              </Text>
              <Text textStyle="bodyText" className="mb-10">
                {selectedTool.description}
              </Text>
              <Button withArrow variant="default">
                <a target="_blank" href="https://book.dojoengine.org/">
                  Documentation
                </a>
              </Button>
            </motion.div>
          </AnimatePresence>
          <div className="relative order-1 grid shrink-0 grid-cols-3 flex-col gap-2 sm:grid-cols-1">
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                onMouseEnter={(e) => {
                  const top = e.currentTarget.offsetTop;

                  setSelectionTop(top);
                  setSelectedIndex(i);

                  if (i > selectedIndex) {
                    setDirection("down");
                  } else {
                    setDirection("up");
                  }
                }}
                className={`z-[1] h-14 w-14 cursor-pointer sm:h-[115px] sm:w-[115px] ${tool.name === selectedTool.name ? "bg-[#321CC4] sm:bg-transparent" : ""} flex items-center justify-center rounded-xl`}
              >
                {tool.icon}
              </div>
            ))}
            <motion.div
              className="absolute left-0 right-0 top-0 z-0 hidden  aspect-square rounded-[22px] bg-[#321CC4] sm:block"
              animate={{ y: selectionTop }}
              transition={{ type: "spring" }}
            ></motion.div>
          </div>
        </div>
        <div className="absolute inset-0 z-[-1] rounded-[40px] backdrop-blur-[50px]" />
      </div>
      <div className="absolute top-[25%] z-[-2] h-[200vw] w-[200vw] rounded-full bg-[#1A1479] shadow-[0_0_64px_40px_#1A1479]" />
    </div>
  );
}
