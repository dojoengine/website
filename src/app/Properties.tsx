"use client";

import { Container } from "@/components/Container";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const allProperties = [
  {
    name: "Provable",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        fill="none"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M20 3.362c.835 0 1.512.678 1.512 1.513V7.9a1.513 1.513 0 0 1-3.025 0V4.875c0-.835.678-1.513 1.513-1.513ZM8.343 8.343c.59-.59 1.548-.59 2.139 0l2.139 2.139a1.512 1.512 0 1 1-2.14 2.139l-2.138-2.139a1.513 1.513 0 0 1 0-2.139Zm23.53 0c.59.59.59 1.548 0 2.139l-2.14 2.139a1.512 1.512 0 1 1-2.138-2.139l2.139-2.139c.59-.59 1.548-.59 2.139 0ZM20 13.95a6.05 6.05 0 1 0 0 12.1 6.05 6.05 0 0 0 0-12.1ZM10.925 20a9.075 9.075 0 1 1 18.15 0 9.075 9.075 0 0 1-18.15 0Zm-7.563 0c0-.835.677-1.512 1.513-1.512H7.9a1.513 1.513 0 0 1 0 3.024H4.875A1.513 1.513 0 0 1 3.362 20Zm27.225 0c0-.835.678-1.512 1.513-1.512h3.025a1.513 1.513 0 0 1 0 3.024H32.1A1.513 1.513 0 0 1 30.587 20Zm-17.966 7.594c.591.59.591 1.548 0 2.14l-2.139 2.138a1.512 1.512 0 1 1-2.138-2.139l2.139-2.139c.59-.59 1.548-.59 2.138 0Zm14.973 0c.59-.59 1.548-.59 2.139 0l2.139 2.14a1.512 1.512 0 1 1-2.14 2.138l-2.138-2.139a1.513 1.513 0 0 1 0-2.139ZM20 30.587c.835 0 1.512.678 1.512 1.513v3.025a1.513 1.513 0 0 1-3.025 0V32.1c0-.835.678-1.513 1.513-1.513Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    bgPos: "top left",
  },
  {
    name: "Native",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M20.3 7.517a1.44 1.44 0 0 0-.6 0c-.17.037-.363.128-1.285.66l-7.864 4.54c-.922.533-1.096.653-1.212.782-.135.15-.237.326-.3.519-.053.165-.07.376-.07 1.442v9.08c0 1.066.017 1.277.07 1.442.063.192.165.369.3.519.116.13.29.25 1.214.782l7.862 4.54c.922.532 1.115.623 1.286.66.197.042.401.042.598 0 .17-.037.364-.128 1.286-.66l7.862-4.54c.923-.532 1.097-.653 1.214-.782.135-.15.237-.327.3-.519.053-.164.07-.374.07-1.436v-9.092c0-1.062-.017-1.272-.07-1.436a1.442 1.442 0 0 0-.3-.52c-.116-.127-.288-.246-1.204-.775l-7.874-4.546c-.923-.533-1.113-.623-1.284-.66ZM19.101 4.7a4.32 4.32 0 0 1 1.796 0c.676.144 1.286.497 1.98.9l.145.083 7.874 4.546.144.083c.689.397 1.299.748 1.76 1.26.405.45.711.98.898 1.556.213.655.212 1.36.212 2.16v9.425c0 .798.001 1.503-.212 2.16a4.32 4.32 0 0 1-.898 1.555c-.463.514-1.075.866-1.773 1.268l-.14.081-7.863 4.54-.14.08c-.698.404-1.31.759-1.987.903a4.32 4.32 0 0 1-1.796 0c-.677-.144-1.29-.499-1.987-.902a45.356 45.356 0 0 0-.14-.081l-7.862-4.54-.143-.082c-.697-.401-1.309-.753-1.771-1.267a4.32 4.32 0 0 1-.898-1.556c-.214-.657-.213-1.363-.212-2.165v-9.414c-.001-.802-.002-1.508.212-2.165a4.32 4.32 0 0 1 .898-1.556c.462-.513 1.073-.865 1.767-1.265l.145-.084 7.864-4.54.14-.08c.697-.404 1.31-.759 1.987-.903ZM20 17.12a2.88 2.88 0 1 0 0 5.76 2.88 2.88 0 0 0 0-5.76ZM14.24 20a5.76 5.76 0 1 1 11.52 0 5.76 5.76 0 0 1-11.52 0Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    bgPos: "top center",
  },
  {
    name: "Fast",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        fill="none"
      >
        <path
          fill="#fff"
          d="M20 6.5a1.35 1.35 0 1 0 0 2.7c5.965 0 10.8 4.835 10.8 10.8 0 5.965-4.835 10.8-10.8 10.8-5.965 0-10.8-4.835-10.8-10.8 0-2.739 1.018-5.24 2.7-7.144v2.419a1.35 1.35 0 1 0 2.7 0v-5.4a1.35 1.35 0 0 0-1.35-1.35h-5.4a1.35 1.35 0 0 0 0 2.7h1.89A13.45 13.45 0 0 0 6.5 20c0 7.456 6.044 13.5 13.5 13.5S33.5 27.456 33.5 20 27.456 6.5 20 6.5Z"
        />
      </svg>
    ),
    bgPos: "top right",
  },
  {
    name: "Robust",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        fill="none"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M29.048 9.536C28.623 9.5 28.065 9.5 27.2 9.5H12.8c-.865 0-1.423.001-1.848.036-.408.033-.56.09-.633.127a1.498 1.498 0 0 0-.655.656c-.038.074-.095.225-.128.633-.035.425-.036.983-.036 1.848V23h21V12.795c0-.863-.001-1.42-.036-1.845-.033-.407-.09-.557-.127-.631a1.501 1.501 0 0 0-.657-.656c-.074-.037-.225-.094-.632-.127Zm4.436 14.742c.016-.448.016-.96.016-1.532V12.738c0-.79 0-1.47-.046-2.032-.048-.592-.155-1.182-.444-1.75a4.502 4.502 0 0 0-1.968-1.966c-.567-.289-1.157-.396-1.75-.444-.561-.046-1.243-.046-2.034-.046H12.743c-.791 0-1.473 0-2.036.046-.593.048-1.183.155-1.75.444A4.499 4.499 0 0 0 6.99 8.957c-.289.567-.396 1.157-.444 1.75-.046.563-.046 1.245-.046 2.035v10c0 .573 0 1.087.016 1.535-.01.073-.016.147-.016.223v.648c0 .378 0 .747.025 1.06.028.343.094.748.302 1.155.29.568.75 1.024 1.31 1.31.407.207.811.273 1.154.301.314.026.685.026 1.066.026h19.285c.38 0 .752 0 1.066-.026a3.036 3.036 0 0 0 1.154-.302 2.994 2.994 0 0 0 1.31-1.309c.208-.407.274-.811.302-1.154.026-.315.026-.686.026-1.067V24.5c0-.076-.006-.15-.016-.223ZM14 32a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 0 3h-9A1.5 1.5 0 0 1 14 32Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    bgPos: "bottom left",
  },
  {
    name: "Scalable",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        fill="none"
      >
        <path
          fill="#fff"
          d="M16.832 7.328a1.584 1.584 0 1 0-3.168 0v4.752c0 .875-.709 1.584-1.584 1.584H7.328a1.584 1.584 0 0 0 0 3.168h4.752a4.752 4.752 0 0 0 4.752-4.752V7.328ZM23.168 32.672a1.584 1.584 0 1 0 3.168 0V27.92c0-.875.709-1.584 1.584-1.584h4.752a1.584 1.584 0 0 0 0-3.168H27.92a4.752 4.752 0 0 0-4.752 4.752v4.752ZM34.256 15.248c0 .875-.71 1.584-1.584 1.584H27.92a4.752 4.752 0 0 1-4.752-4.752V7.328a1.584 1.584 0 1 1 3.168 0v4.752c0 .875.709 1.584 1.584 1.584h4.752c.875 0 1.584.71 1.584 1.584ZM7.328 23.168a1.584 1.584 0 0 0 0 3.168h4.752c.875 0 1.584.71 1.584 1.584v4.752a1.584 1.584 0 0 0 3.168 0V27.92a4.752 4.752 0 0 0-4.752-4.752H7.328Z"
        />
      </svg>
    ),
    bgPos: "bottom center",
  },
  {
    name: "Composable",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        fill="none"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M22.75 9A2.75 2.75 0 0 0 20 11.75c0 .65-.224 1.296-.628 1.802-.412.516-1.073.948-1.914.948H14.5v2.958c0 .841-.432 1.502-.948 1.915A2.913 2.913 0 0 1 11.75 20a2.75 2.75 0 1 0 0 5.5c.65 0 1.296.224 1.802.627.516.413.948 1.074.948 1.915V31H31v-2.75a5.5 5.5 0 0 1 0-11V14.5h-2.958c-.841 0-1.503-.432-1.915-.948a2.913 2.913 0 0 1-.627-1.802A2.75 2.75 0 0 0 22.75 9Zm-5.5 2.75a5.5 5.5 0 1 1 11 0H31a2.75 2.75 0 0 1 2.75 2.75v2.958c0 .841-.432 1.502-.948 1.915A2.913 2.913 0 0 1 31 20a2.75 2.75 0 1 0 0 5.5c.65 0 1.297.224 1.802.627.516.413.948 1.074.948 1.915V31A2.75 2.75 0 0 1 31 33.75H14.5A2.75 2.75 0 0 1 11.75 31v-2.75a5.5 5.5 0 0 1 0-11V14.5a2.75 2.75 0 0 1 2.75-2.75h2.75Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    bgPos: "bottom right",
  },
];

export function Properties() {
  const [gridSize, setGridSize] = useState("");
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!container.current) return;

    const containerSize = container.current.getBoundingClientRect();

    setGridSize(`${containerSize.width}px ${containerSize.height}px`);
  }, []);

  return (
    <Container>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gap={5}
        ref={container}
        position="relative"
      >
        {allProperties.map((property, index) => {
          return (
            <Flex
              borderRadius={16}
              p={6}
              flexDir="column"
              justifyContent="space-between"
              alignItems="flex-end"
              key={index}
              aspectRatio="409 / 279"
              bg="url('/images/tile-bg.png')"
              bgSize={gridSize}
              bgPos={property.bgPos}
              position="relative"
              cursor="pointer"
            >
              <Box zIndex={5}>{property.icon}</Box>
              <Text textStyle="title3" alignSelf="flex-start">
                {property.name}
              </Text>
              <motion.div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  borderRadius: "16px",
                  background: "url('/images/tile-bg.png')",
                  backgroundSize: gridSize,
                  backgroundPosition: property.bgPos,
                  maskImage:
                    "radial-gradient(ellipse 0% 0% at 50% 50%, black 100%, transparent 50%)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "24px",
                }}
                whileHover={{
                  maskImage:
                    "radial-gradient(ellipse 70% 70% at 50% 50%, black 100%, transparent 50%)",
                }}
              >
                <Text textStyle="bodyText">
                  Here is a medium length paragraph about this feature and maybe
                  an extra line.
                </Text>
              </motion.div>
            </Flex>
          );
        })}
        <Box
          position="absolute"
          left={-50}
          right={-50}
          top={-50}
          bottom={-50}
          zIndex={-1}
          bg="#361AAD"
          opacity="0.5"
          boxShadow="#021531 0px 0px 40px 40px inset"
        />
      </Grid>
    </Container>
  );
}
