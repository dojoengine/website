"use client";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function getRandomIndices<T>(array: T[], numIndices: number): number[] {
  if (numIndices > array.length) {
    throw new Error("Number of indices requested exceeds array length.");
  }

  const indices = Array.from({ length: array.length }, (_, index) => index);

  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  return indices.slice(0, numIndices);
}

export function GitHub({ contributorImages }: { contributorImages: string[] }) {
  const [shownContributorIndices, setShownContributorIndices] = useState<
    number[]
  >(getRandomIndices(contributorImages, 8));
  const theRest = contributorImages.slice(8);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 8);

      setShownContributorIndices((prev) => {
        const newFirstEight = [...prev];

        let newIndex = Math.floor(Math.random() * contributorImages.length);

        while (newFirstEight.includes(newIndex)) {
          newIndex = Math.floor(Math.random() * contributorImages.length);
        }

        newFirstEight[randomIndex] = newIndex;

        return newFirstEight;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Flex gap={20} alignItems="center">
        <Flex flexDir="column" alignItems="flex-start">
          <Box mb={5}>
            <Badge
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  fill="none"
                >
                  <path
                    fill="#03152E"
                    d="m13.137 6.105-1.046.782a.658.658 0 0 0-.263.53v.28a.38.38 0 0 0 .591.316l1.293-.863a.392.392 0 0 1 .21-.065h.032a.351.351 0 0 1 .247.597l-.615.616c-.18.18-.4.316-.64.396l-.82.272a.433.433 0 0 0-.298.415.449.449 0 0 1-.126.31l-.554.553a1.046 1.046 0 0 0-.306.743v.133c0 .507.42.918.925.918.34 0 .655-.191.807-.495l.124-.25a.445.445 0 0 1 .396-.245c.139 0 .269.065.353.177l.504.671a.35.35 0 0 0 .594-.368l-.034-.071a.399.399 0 0 1 .232-.557l.656-.22a.572.572 0 0 0 .393-.544c0-.319.256-.576.575-.576h.906c.273 0 .495.223.495.495a.496.496 0 0 1-.495.495h-.64c-.223 0-.44.09-.597.248l-.146.145a.351.351 0 0 0 .248.597h.35c.185 0 .365.075.495.205l.2.2a.3.3 0 0 1 0 .421l-.231.232a.62.62 0 0 0-.174.427c0 .158.062.31.177.424l.566.566c.316.316.745.495 1.194.495h.23c.2-.625.308-1.29.308-1.98a6.433 6.433 0 0 0-6.116-6.425Zm5.321 9.525a.698.698 0 0 0-.402-.127.702.702 0 0 1-.495-.204l-.411-.417a1.26 1.26 0 0 0-.894-.372c-.3 0-.594-.108-.823-.303l-.82-.705a1.987 1.987 0 0 0-1.287-.477h-.65c-.39 0-.773.115-1.098.331l-.848.566c-.55.369-.882.987-.882 1.65v.099c0 .525.208 1.03.579 1.401l.495.495a1.4 1.4 0 0 0 .99.411h.659a.74.74 0 0 1 .742.743c0 .077.013.155.034.226a6.43 6.43 0 0 0 5.111-3.317Zm-13.56-3.1a7.92 7.92 0 1 1 15.84 0 7.92 7.92 0 0 1-15.84 0Zm5.795-4.804a.497.497 0 0 0-.7 0l-.99.99a.497.497 0 0 0 0 .699.497.497 0 0 0 .7 0l.99-.99a.497.497 0 0 0 0-.7Z"
                  />
                </svg>
              }
              text="Global"
              color="badge.teal"
            />
          </Box>
          <Text textStyle="headline2" mb={5}>
            Contributors
          </Text>
          <Text textStyle="bodyText" mb={10}>
            We have a worldwide team of contributors that help us with
            everything from backend, frontend, design, and ops.
          </Text>
          <Button variant="showArrow">Contribute</Button>
        </Flex>
        <Grid gridTemplateColumns="repeat(3, 200px)" gap={5}>
          <AnimatePresence mode="popLayout">
            {shownContributorIndices.map((index) => (
              <motion.div
                key={contributorImages[index]}
                style={{
                  aspectRatio: "1 / 1",
                  background:
                    "linear-gradient(180deg, #321CC1 52.27%, #7519A1 130.69%)",
                  position: "relative",
                  borderRadius: 40,
                  padding: "12px",
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  bg={`url('${contributorImages[index]}')`}
                  boxSize="100%"
                  bgSize="contain"
                  bgPos="center center"
                  borderRadius={28}
                />
              </motion.div>
            ))}
          </AnimatePresence>
          <Center gap={2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={31}
              fill="none"
            >
              <path
                fill="url(#iconGradient)"
                d="M13.049 15.445a7.323 7.323 0 1 0 0-14.646 7.323 7.323 0 0 0 0 14.646Zm-2.615 2.746c-5.635 0-10.2 4.566-10.2 10.201 0 .938.76 1.7 1.699 1.7h22.232a1.7 1.7 0 0 0 1.699-1.7c0-5.635-4.566-10.2-10.2-10.2h-5.23Z"
                opacity={0.3}
              />
              <defs>
                <linearGradient
                  id="iconGradient"
                  x1={13.049}
                  x2={13.049}
                  y1={0.799}
                  y2={30.091}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff" />
                  <stop offset={1} stopColor="#999" />
                </linearGradient>
              </defs>
            </svg>
            <Text
              fontFamily="Agrandir Variable"
              fontWeight={469}
              fontSize="32px"
            >
              +{theRest.length}
            </Text>
          </Center>
        </Grid>
      </Flex>
    </Container>
  );
}
