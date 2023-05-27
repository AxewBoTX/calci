import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};
const colors = {
  light: "#f0e7db",
  dark: "#202023",
};
const fonts = {
  heading: `"M PLUS Rounded 1c", sans-serif`,
  body: `"M PLUS Rounded 1c", sans-serif`,
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ styles, colors, fonts, config });

export default theme;
