import { Box, Flex, Button } from "@chakra-ui/react";
import ThemeButton from "@/components/themeButton.js";
import MainLayout from "@/lib/mainLayout.js";
import ButtonList from "@/lib/buttonList.js";
import ButtonStyle from "@/styles/buttonStyle.js";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
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
        <Flex width="100%" flex="1" align="flex-end" justify="flex-end">
          <Box mr="20px" fontSize="45px">
            {input}
          </Box>
        </Flex>
        <Box
          width="100%"
          flex="2.5"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-end"
          height="100%"
          gap="20px"
          mb="20px"
        >
          <Flex width="100%" align="center" justify="space-evenly">
            {ButtonList[0].map((button) => {
              return (
                <Button
                  style={ButtonStyle[`${button.class}Style`]}
                  key={button.text}
                  colorScheme={button.scheme}
                  onClick={() => {
                    button.func(setInput, input);
                  }}
                >
                  {button.text}
                </Button>
              );
            })}
          </Flex>
          <Flex width="100%" align="center" justify="space-evenly">
            {ButtonList[1].map((button) => {
              return (
                <Button
                  style={ButtonStyle[`${button.class}Style`]}
                  key={button.text}
                  colorScheme={button.scheme}
                  onClick={() => {
                    button.func(setInput);
                  }}
                >
                  {button.text}
                </Button>
              );
            })}
          </Flex>
          <Flex width="100%" align="center" justify="space-evenly">
            {ButtonList[2].map((button) => {
              return (
                <Button
                  style={ButtonStyle[`${button.class}Style`]}
                  key={button.text}
                  colorScheme={button.scheme}
                  onClick={() => {
                    button.func(setInput);
                  }}
                >
                  {button.text}
                </Button>
              );
            })}
          </Flex>
          <Flex width="100%" align="center" justify="space-evenly">
            {ButtonList[3].map((button) => {
              return (
                <Button
                  style={ButtonStyle[`${button.class}Style`]}
                  key={button.text}
                  colorScheme={button.scheme}
                  onClick={() => {
                    button.func(setInput);
                  }}
                >
                  {button.text}
                </Button>
              );
            })}
          </Flex>
          <Flex width="100%" align="center" justify="space-evenly">
            {ButtonList[4].map((button) => {
              return (
                <Button
                  style={ButtonStyle[`${button.class}Style`]}
                  key={button.text}
                  colorScheme={button.scheme}
                  onClick={() => {
                    button.func(setInput);
                  }}
                >
                  {button.text}
                </Button>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </MainLayout>
  );
}
