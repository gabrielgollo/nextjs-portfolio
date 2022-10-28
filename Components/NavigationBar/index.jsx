import { Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Box, Container, Flex, Stack } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { Icon } from '@iconify/react'

export const NavigationBar = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Box
      position="fixed"
      as="nav"
      bgColor={useColorModeValue('#FAF3E1', '#222B46')}
      color={useColorModeValue('#000000', 'whitesmoke')}
      w="100%"
      zIndex={1}
    >
      <Container
        display="flex"
        maxW="container.sm"
        p={2}
        wrap="wrap"
        align="center"
        justify="space-around"
      >
        <Flex align="center" mr={5} style={{ fontWeight: 500 }}>
            <Link href="/" display="inline-flex" alignItems="center">
               Gabriel Gollo
               <Icon icon='twemoji:bird' />
            </Link>
        </Flex>

        <Stack
          direction={{ base: 'column', sm: 'row' }}
          display={{ base: 'none', sm: 'flex' }}
          width={{ base: 'full', sm: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, sm: 0 }}
          justify="space-around"
          fontWeight={500}
        >
          <Link href="/" display="inline-flex" >Home</Link>
          {/* <Link href="/contact" display="inline-flex" >Contact</Link> */}
          {/* <Link href="/about" display={"inline-flex"}>About</Link> */}
          <Link href="https://github.com/gabrielgollo" display="inline-flex" alignItems="center" isExternal>
            <Icon icon="akar-icons:github-fill" />
             GitHub
          </Link>
        </Stack>

        <Box flex={1} align="right">
          <IconButton width="40px" onClick={toggleColorMode}><SunIcon /></IconButton>

        <Box ml={2} display={{ base: 'inline-block', sm: 'none' }}>
            <Menu isLazy={true} id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList fontWeight={500}>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                {/* <NextLink href="/contact" passHref>
                  <MenuItem as={Link}>Contact</MenuItem>
                </NextLink> */}
                <MenuItem
                  as={Link}
                  href="https://github.com/gabrielgollo"
                  display="inline-flex"
                  isExternal
                >
                  <Icon icon="akar-icons:github-fill" />
                   Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
