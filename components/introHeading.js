import { Flex, Box, useColorModeValue, Image } from "@chakra-ui/react";

const IntroHeading = () => {
  return (
    <Flex align="center" justify="center" gap="20px">
      <Box
        bgColor="red"
        borderRadius="50%"
        border={useColorModeValue("2px solid black", "2px solid white")}
      >
        <Image src="/logo.png" alt="Calci Logo" width="150px" />
      </Box>
      <Box>
        <Box fontSize="55px" lineHeight="50px">
          Calci
        </Box>
        <Box ml="10px">Its Just A Calculator</Box>
      </Box>
    </Flex>
  );
};

export default IntroHeading;
