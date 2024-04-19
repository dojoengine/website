"use client";

import { theme } from "@/theme";
import { Global } from "@emotion/react";
import { ChakraBaseProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Global
        styles={`
        @font-face {
            font-family: 'Agrandir Variable';
            src: url('/fonts/AgrandirVariable.ttf');
          }
        @font-face {
            font-family: 'IBM Plex Sans';
            src: url('/fonts/IBMPlexSans-Bold.otf');
            font-weight: 600;
          }
        @font-face {
            font-family: 'IBM Plex Mono Light';
            src: url('/fonts/IBMPlexMono-Light.otf');
            font-weight: 300;
          }
        @font-face {
            font-family: 'IBM Plex Mono SemiBold';
            src: url('/fonts/IBMPlexMono-SemiBold.otf');
            font-weight: 600;
          }
        @font-face {
            font-family: 'Inter Bold';
            src: url('/fonts/Inter-Bold.otf');
            font-weight: 700;
          }
        @font-face {
            font-family: 'Circular LL';
            src: url('/fonts/CircularLL-Book.ttf');
            font-weight: 450;
          }
        `}
      />
      {children}
    </ChakraBaseProvider>
  );
}
