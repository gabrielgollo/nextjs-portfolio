import { Box, Container } from "@chakra-ui/layout";
import Head from "next/head";
import { NavigationBar } from "../Components/NavigationBar";

export default function Layout({ children }) {
  return (
    <Box>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <NavigationBar></NavigationBar>
      <Container maxW="container.xl" centerContent>
        {children}
      </Container>
    </Box>
  );
}
