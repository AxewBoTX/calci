import { Box, Flex, Button } from "@chakra-ui/react";
import ThemeButton from "/components/themeButton.js";
import MainLayout from "/lib/mainLayout.js";
import ButtonList from "/lib/buttonList.js";
import styles from "/styles/home.module.css";

export default function Home() {
  const setClass = () => {
    return styles.zero;
  };
  return (
    <MainLayout>
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
        <Box bgColor="blue" width="100%" flex="2.5">
          {ButtonList.map((button) => {
            return (
              <Box key={button.text}>
                <Button
                  onClick={() => {
                    button.func("Hello World");
                  }}
                >
                  {button.text}
                </Button>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </MainLayout>
  );
}
