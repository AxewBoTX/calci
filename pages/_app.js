import { ChakraProvider } from "@chakra-ui/react";
import theme from "/lib/theme.js";
import "@fontsource/m-plus-rounded-1c/700.css";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
