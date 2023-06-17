import MainLayout from "/lib/mainLayout.js";
import { Container, Box } from "@chakra-ui/react";

const About = () => {
  return (
    <MainLayout>
      <Container mt="170px" width="600px" textAlign="center" fontSize="20px">
        <Box display="inline-block" fontSize="50px" lineHeight="0">
          Calci
        </Box>
        as its name and slogan suggests, is just a calculator. You neither can
        nor should expect nothing more to get from it, its just a basic
        calculator. It don&apos;t even contain any actualy way for you to square
        two numbers, you just have to figure it out yourself.
      </Container>
    </MainLayout>
  );
};

export default About;
