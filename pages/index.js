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
          <Text>Here goes something</Text>
        </Box>
        <Screenshots />
      </Container>
    </MainLayout>
  );
}
