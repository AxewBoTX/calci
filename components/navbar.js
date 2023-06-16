import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const SmallNavbar = () => {
  return <Box>SmallNavbar</Box>;
};
const BigNavbar = () => {
  return <Box>BigNavbar</Box>;
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
