import MainLayout from "/lib/mainLayout.js";
import { Container, Box, Text } from "@chakra-ui/react";
import IntroHeading from "/components/introHeading.js";
import Screenshots from "/components/screenshots.js";

export default function Home() {
  return (
    <MainLayout>
      <Container mt="140px">
        <IntroHeading />
        <Box>
          <Text>Calci is amazing.</Text>
          <Text>Calci is smart.</Text>
          <Text>Calci is good.</Text>
          <Text>Calci is cool.</Text>
        </Box>
        <Screenshots />
      </Container>
    </MainLayout>
  );
}
