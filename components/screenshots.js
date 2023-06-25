import { Box, Image, useColorModeValue } from "@chakra-ui/react";

const Screenshots = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {useColorModeValue(
        <Image
          alt="Screenshot Light"
          src="/screenshot-light.png"
          width="280px"
          borderRadius="15px"
          border="2px solid black"
        />,
        <Image
          alt="Screenshot Dark"
          src="/screenshot-dark.png"
          width="280px"
          borderRadius="15px"
          border="2px solid white"
        />
      )}
    </Box>
  );
};

export default Screenshots;
