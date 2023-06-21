import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f5f5f5", "#000000")(props),
    },
  }),
};
const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: "30px",
        marginBottom: "8px",
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
      },
    },
  },
};
const colors = {
  light: "#f5f5f5",
  dark: "#000000",
};
const fonts = {
  heading: `"Space Grotesk", sans-serif`,
  body: `"Space Grotesk", sans-serif`,
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ styles, components, colors, fonts, config });

export default theme;
