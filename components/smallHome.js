import { Box, Flex } from "@chakra-ui/react";
import styles from "styles/home.module.css";
import ThemeButton from "/components/themeButton.js";

const SmallHome = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      right="0"
      left="0"
      bottom="0"
      direction="column"
      align="center"
      justify="center"
    >
      <Flex width="100%" mt="10px" ml="15px">
        <ThemeButton />
      </Flex>
      <Flex
        bgColor="red"
        width="100%"
        flex="1"
        align="flex-end"
        justify="flex-end"
      >
        <Box mr="20px" mb="20px" fontSize="45px"></Box>
      </Flex>
      <Box bgColor="blue" width="100%" flex="2.5"></Box>
    </Flex>
  );
};

export default SmallHome;
