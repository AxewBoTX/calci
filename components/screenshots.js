import { Box, Image, useColorModeValue } from "@chakra-ui/react";

const Screenshots = () => {
  return (
    <Box mt="15px" display="flex" alignItems="center" justifyContent="center">
      {useColorModeValue(
        <Image
          alt="Screenshot Dark"
          src="/screenshot-dark.jpg"
          width="300px"
        />,
        <Image
          alt="Screenshot Light"
          src="/screenshot-light.jpg"
          width="300px"
        />
      )}
    </Box>
  );
};

export default Screenshots;
