import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      colorScheme="red"
      border={useColorModeValue("2px solid black", "2px solid white")}
    >
      {colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};

export default ThemeButton;
