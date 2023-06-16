import { ChakraProvider } from "@chakra-ui/react";
import theme from "/lib/theme.js";
import "@fontsource/space-grotesk/500.css";
import Navbar from "/components/navbar.js";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
