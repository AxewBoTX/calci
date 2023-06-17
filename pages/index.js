import MainLayout from "/lib/mainLayout.js";
import { Box, Container } from "@chakra-ui/react";
import IntroHeading from "/components/introHeading.js";

export default function Home() {
  return (
    <MainLayout>
      <Container mt="140px">
        <IntroHeading />
      </Container>
    </MainLayout>
  );
}
