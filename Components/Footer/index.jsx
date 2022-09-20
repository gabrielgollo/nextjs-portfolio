import { Box, useColorModeValue } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" color={useColorModeValue("whitesmoke", "whitesmoke")}>
      &copy; {new Date().getFullYear()} Gabriel Santos Gollo do Amaral. All Rights Reserved.
    </Box>
  )
}

export default Footer