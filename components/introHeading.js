import { Flex, Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

const IntroHeading = () => {
  return (
    <Flex align="center" justify="center" gap="20px">
      <Box
        bgColor="red"
        borderRadius="50%"
        border={useColorModeValue("2px solid black", "2px solid white")}
      >
        <Image
          src="/../public/logo.png"
          alt="Calci Logo"
          width="150"
          height="150"
        />
      </Box>
      <Box>
        <Box fontSize="55px" lineHeight="50px">
          Calci
        </Box>
        <Box>Its Just A Calculator</Box>
      </Box>
    </Flex>
  );
};

export default IntroHeading;
