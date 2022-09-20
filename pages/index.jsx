import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Image from "next/image"
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
          Hello there! I am a full stack developer!
      </Box>
      <Box 
        title="page-content"
        color={useColorModeValue("whitesmoke", "grey.200")}
      >
        <Box display={{md: "flex"}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Gabriel Gollo
            </Heading>
            <p>Software Developer / Automation and Control Student / Gamer</p>
          </Box>
        </Box>
        <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/images/gabrielgollo.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>
    </ArticleLayout>
  )
}
