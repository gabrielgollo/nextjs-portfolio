import { Link } from "@chakra-ui/react";

import { Box, Center, Grid, GridItem } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Icon } from "@iconify/react";


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
        <Grid templateColumns="2fr 1fr 1fr 2fr 1fr" gap={8}>
          
          <Grid gap={8}>
            <Center>
              <Link href="/" display={"inline-flex"}>
                <MoonIcon />
                Gabriel Gollo
              </Link>
            </Center>
          </Grid>

          <Grid>
            <Center><Link href="/" display={"inline-flex"} >Home</Link></Center>
          </Grid>

          <Grid>
            <Center><Link href="/contact" display={"inline-flex"} >Contact</Link></Center>
          </Grid>
          
          {/* <Grid>
            <Center><Link href="/about" display={"inline-flex"}>About</Link></Center>
          </Grid> */}

          <Grid>
            <Center >
              <Link href="https://github.com/gabrielgollo" display={"inline-flex"}>
                <Icon icon="akar-icons:github-fill" />
                GitHub
              </Link>
            </Center>
          </Grid>

          <Grid>
            <Center><IconButton width="40px" onClick={toggleColorMode}><SunIcon /></IconButton></Center>
          </Grid>
          
        </Grid>
      </Center>
    </Box>
  );
};
