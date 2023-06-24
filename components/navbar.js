import {
  Box,
  Button,
  Container,
  useColorModeValue,
  Text,
  Menu,
  IconButton,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ThemeButton from "./themeButton.js";
import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

const BigNavbar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt="10px"
    >
      <Box fontSize="35px" ml="20px" as={Link} href="/">
        Calci
      </Box>
      <Box
        display="flex"
        mr="20px"
        alignItems="center"
        justifyContent="center"
        gap="20px"
      >
        <Button
          colorScheme="red"
          border={useColorModeValue("2px solid black", "2px solid white")}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          as={Link}
          href="https://github.com/AxewBoTX/calci"
        >
          <Text>Source</Text>
          <FaGithub />
        </Button>
        <Button
          colorScheme="red"
          border={useColorModeValue("2px solid black", "2px solid white")}
          as={Link}
          href="/about"
        >
          About
        </Button>
        <ThemeButton />
      </Box>
    </Box>
  );
};

const SmallNavbar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt="10px"
    >
      <Box fontSize="35px" ml="20px" as={Link} href="/">
        Calci
      </Box>
      <Box
        mr="20px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="10px"
      >
        <ThemeButton />
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            colorScheme="red"
            border={useColorModeValue("2px solid black", "2px solid white")}
          />
          <MenuList>
            <MenuItem as={Link} href="/">
              Home
            </MenuItem>
            <MenuItem as={Link} href="/about">
              About
            </MenuItem>
          </MenuList>
        </Menu>
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
  return (
    <Container
      maxW="1280px"
      position="fixed"
      left="0"
      right="0"
      top="0"
      style={{ backdropFilter: "blur(20px)" }}
      zIndex={1}
    >
      {width >= 800 ? <BigNavbar /> : <SmallNavbar />}
    </Container>
  );
};

export default Navbar;
