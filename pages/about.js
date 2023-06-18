import MainLayout from "/lib/mainLayout.js";
import Link from "next/link";
import {
  Container,
  Box,
  IconButton,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaDiscord,
  FaGlobe,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const About = () => {
  return (
    <MainLayout>
      <Box
        mt="150px"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box display="flex" fontSize="22px" maxW="600px">
          <Text textAlign="center">
            <b>Calci</b>, as its name and slogan suggests, is just a calculator.
            You neither can nor should expect anything more from it, it&apos;s
            just a basic calculator. It don&apos;t even contain any actualy way
            for you to square a number, you just have to figure it out yourself.
          </Text>
        </Box>
        <Box mt="20px" display="flex" fontSize="22px" maxW="600px">
          <Text textAlign="center">
            I am <b>AxewBoTX</b>, you can call me Axew. I am just a random guy
            who loves coding and creating new things. I worked on this projet
            just for the purpose of learning how to connect Web and Android
            development.
          </Text>
        </Box>
        <Box mt="20px" display="flex" fontSize="22px" maxW="600px">
          <Text textAlign="center">
            You can find me on almost all the social media platforms.
          </Text>
        </Box>
        <Container
          mt="20px"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          minW="300px"
          maxW="500px"
          mb="80px"
        >
          <IconButton
            size="lg"
            colorScheme="teal"
            icon={<FaGlobe />}
            border={useColorModeValue("2px solid black", "2px solid white")}
            as={Link}
            href="https://axewbotx.is-a.dev"
          />
          <IconButton
            size="lg"
            colorScheme="teal"
            icon={<FaTwitter />}
            border={useColorModeValue("2px solid black", "2px solid white")}
            as={Link}
            href="https://twitter.com/axewbotx"
          />
          <IconButton
            size="lg"
            colorScheme="teal"
            icon={<FaGithub />}
            border={useColorModeValue("2px solid black", "2px solid white")}
            as={Link}
            href="https://github.com/axewbotx"
          />
          <IconButton
            size="lg"
            colorScheme="teal"
            icon={<FaDiscord />}
            border={useColorModeValue("2px solid black", "2px solid white")}
            as={Link}
            href="https://discordapp.com/users/757816994178531369"
          />
          <IconButton
            size="lg"
            colorScheme="teal"
            icon={<FaYoutube />}
            border={useColorModeValue("2px solid black", "2px solid white")}
            as={Link}
            href="https://www.youtube.com/@AxewBoTX"
          />
        </Container>
      </Box>
    </MainLayout>
  );
};

export default About;
