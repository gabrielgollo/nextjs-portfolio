import { useRouter } from "next/dist/client/router";
import Image from "next/image"
import Link from "next/link";

import { Box, Center, Grid, GridItem } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

import { styles } from "../../styles/theme";

export const NavigationBar = () => {
  const {toggleColorMode} = useColorMode();
  return (
    <Box 
      position="fixed" 
      as="nav" 
      bgColor={useColorModeValue("#A7D0CD", "#112031")} 
      color={useColorModeValue("#000000", "#FFFFFF")}
      w="100%"
      zIndex={1}
    >
      <Center>
        <Grid templateColumns="2fr 1fr 1fr 1fr 1fr" gap={8}>
          
          <Grid gap={8}>
            <Center>
              <GridItem>
                <MoonIcon />
              </GridItem>
              <Link href="/">Gabriel Gollo</Link>
            </Center>
          </Grid>

          <Grid>
            <Center><Link href="/">Home</Link></Center>
          </Grid>

          <Grid>
            <Center><Link href="/contact">Contact</Link></Center>
          </Grid>
          
          <Grid>
            <Center><Link href="/about">About</Link></Center>
          </Grid>

          <Grid>
            <Center><IconButton width="40px" onClick={toggleColorMode}><SunIcon /></IconButton></Center>
          </Grid>
          
        </Grid>
      </Center>
    </Box>
  );
};
