import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import ArticleLayout from "../layout/article";

export default function HomePageApp() {
  return (
    <ArticleLayout>
      <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("#A7D0CD", "#112031")}
          color={useColorModeValue("black.800", "grey.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello there! I am a full stack developer and student of Automation and Control Engineering!
      </Box>
      <Box display={{md: "flex"}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gabriel Gollo
          </Heading>
          <p>Software Developer / Automation and Control Student / Gamer</p>
        </Box>
      </Box>
    </ArticleLayout>
  )
}
