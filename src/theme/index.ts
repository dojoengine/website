import { extendBaseTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { textStyles } from "./textStyles";
import { components } from "./components";

export const theme = extendBaseTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  components,
  colors,
  textStyles,
});
