import { Box, Image, useColorModeValue } from "@chakra-ui/react";

const Screenshots = () => {
  return (
    <Box
      mt="15px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      border={useColorModeValue("2px solid black", "2px solid white")}
      borderRadius="15px"
    >
      {useColorModeValue(
        <Image
          alt="Screenshot Light"
          src="/screenshot-light.jpg"
          width="300px"
          borderRadius="15px"
        />,
        <Image
          alt="Screenshot Dark"
          src="/screenshot-dark.jpg"
          width="300px"
          borderRadius="15px"
        />
      )}
    </Box>
  );
};

export default Screenshots;
