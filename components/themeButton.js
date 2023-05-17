import { Box, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        colorScheme={useColorModeValue("purple", "orange")}
      />
    </Box>
  );
}

export default ThemeButton;
