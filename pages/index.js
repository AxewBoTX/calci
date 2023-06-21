import MainLayout from "/lib/mainLayout.js";
import { Container, Box, Text } from "@chakra-ui/react";
import IntroHeading from "/components/introHeading.js";
import Screenshots from "/components/screenshots.js";
import { useState, useEffect } from "react";

const BigHome = () => {
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-around">
        <IntroHeading />
        <Screenshots />
      </Box>
      <Box>
        <Text>Calci is amazing.</Text>
        <Text>Calci is smart.</Text>
        <Text>Calci is good.</Text>
        <Text>Calci is cool.</Text>
      </Box>
    </Box>
  );
};

const SmallHome = () => {
  return (
    <Box>
      <IntroHeading />
      <Container
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="50px"
        gap="10px"
        fontSize="22px"
        maxW="600px"
      >
        <Box
          display="flex"
          width="50%"
          minW="250px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>Calci is amazing.</Text>
          <Text>🤯</Text>
        </Box>
        <Box
          display="flex"
          width="50%"
          minW="250px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>Calci is smart.</Text>
          <Text>🤓</Text>
        </Box>
        <Box
          display="flex"
          width="50%"
          minW="250px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>Calci is good.</Text>
          <Text>😊</Text>
        </Box>
        <Box
          display="flex"
          width="50%"
          minW="250px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>Calci is cool.</Text>
          <Text>😎</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default function Home() {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <MainLayout>
      <Container mt="140px" maxW="100%">
        {width >= 800 ? <BigHome /> : <SmallHome />}
      </Container>
    </MainLayout>
  );
}
