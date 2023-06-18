import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "/lib/theme.js";
import "@fontsource/space-grotesk/500.css";
import Navbar from "/components/navbar.js";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Container maxW="1100px">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
