import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import MainLayout from "/lib/mainLayout.js";
import { GiShrug } from "react-icons/gi";

const NotFound = () => {
  return (
    <MainLayout>
      <Container mt="120px">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Heading variant="section-title" textUnderlineOffset="8px" mb="20px">
            Opps! Not Found
          </Heading>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <GiShrug size={100} />
        </Box>
        <Text align="center" fontSize="22px" mt="40px">
          The Page You Are Looking For Cannot Be Found.
        </Text>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="40px"
        >
          <Button
            width="200px"
            colorScheme="red"
            as={NextLink}
            href="/"
            border={useColorModeValue("2px solid black", "2px solid white")}
          >
            Return To Home
          </Button>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default NotFound;
