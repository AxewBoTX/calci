import MainLayout from "/lib/mainLayout.js";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Container,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import IntroHeading from "/components/introHeading.js";
import Screenshots from "/components/screenshots.js";
import { useState, useEffect } from "react";

const BigHome = () => {
  return <Container maxW="1000px"></Container>;
};

const SmallHome = () => {
  return (
    <Box mt="140px">
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
          fontSize="22px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="10px"
          mb="50px"
          minW="240px"
        >
          <Text>Download Calci Now❗</Text>
          <Button
            colorScheme="red"
            border={useColorModeValue("2px solid black", "2px solid white")}
          >
            Download Now
          </Button>
        </Box>
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
      <Box display="flex" alignItems="center" justifyContent="center">
        {useColorModeValue(
          <Box
            mt="50px"
            fontSize="22px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="30px"
          >
            <Text> Calci looks good in light.</Text>
            <Text>🌞</Text>
          </Box>,
          <Box
            mt="50px"
            fontSize="22px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="30px"
          >
            <Text>Calci looks good in dark.</Text>
            <Text>🌚</Text>
          </Box>
        )}
      </Box>
      <Box mt="20px" mb="80px">
        <Screenshots />
      </Box>
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
      <Container maxW="100%">
        {width >= 800 ? <BigHome /> : <SmallHome />}
      </Container>
    </MainLayout>
  );
}
