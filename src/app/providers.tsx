"use client";

import { theme } from "@/theme";
import { ChakraBaseProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>;
}
