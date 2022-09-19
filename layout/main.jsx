import { Box, Container } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../Components/Footer";
import { NavigationBar } from "../Components/NavigationBar";
import { RubikCube } from "../Components/RubikCube";

export default function Layout({ children }) {
  return (
    <Box as="main" pb="8">
      <NavigationBar />
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <Container pt={14} maxW="container.xl" centerContent>
        <RubikCube />
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("#A7D0CD", "#112031")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hi there! I am a full stack developer!
        </Box>

        {children}

        <Footer />
      </Container>
    </Box>
  );
}
