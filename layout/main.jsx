import { Box, Container } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../Components/Footer";
import { NavigationBar } from "../Components/NavigationBar";
import { RubikCube } from "../Components/RubikCube";
import Section from "../Components/Section";

export default function Layout({ children }) {
  return (
    <Box as="main" pb="8">
      <NavigationBar />
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <Container pt={14} maxW="container.xl" centerContent>
        <Section delay={0.2}>
          <RubikCube />
        </Section>

        <Section delay={0.3}>
          {children}
        </Section>
        <Footer />
      </Container>
    </Box>
  );
}
