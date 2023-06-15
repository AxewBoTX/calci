import { ChakraProvider } from "@chakra-ui/react";
import theme from "/lib/theme.js";
import "@fontsource/space-grotesk";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
