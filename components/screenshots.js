import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";

const Screenshots = () => {
  return (
    <Flex direction="column">
      {useColorModeValue(
        <Image
          src="/screenshot-dark.jpg"
          alt="Dark Screenshot"
          width="120px"
        />,
        <Image
          src="/screenshot-light.jpg"
          alt="Light Screenshot"
          width="120px"
        />
      )}
    </Flex>
  );
};

export default Screenshots;
