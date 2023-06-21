import { Box, Image, useColorModeValue } from "@chakra-ui/react";

const Screenshots = () => {
  return (
    <Box
      mt="20px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mb="80px"
    >
      {useColorModeValue(
        <Image
          alt="Screenshot Light"
          src="/screenshot-light.jpg"
          width="300px"
          borderRadius="15px"
          border="2px solid black"
        />,
        <Image
          alt="Screenshot Dark"
          src="/screenshot-dark.jpg"
          width="300px"
          borderRadius="15px"
          border="2px solid white"
        />
      )}
    </Box>
  );
};

export default Screenshots;
