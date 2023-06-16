import { Box, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ThemeButton from "./themeButton.js";

const SmallNavbar = () => {
  return <Box>SmallNavbar</Box>;
};
const BigNavbar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt="10px"
    >
      <Box fontSize="35px" ml="20px" flex="2">
        Calci
      </Box>
      <Box
        display="flex"
        mr="20px"
        alignItems="center"
        justifyContent="center"
        gap="20px"
      >
        <Button colorScheme="blue">Download</Button>
        <Button>About</Button>
        <ThemeButton />
      </Box>
    </Box>
  );
};

const Navbar = () => {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <Box>{width >= 800 ? <BigNavbar /> : <SmallNavbar />}</Box>;
};

export default Navbar;
