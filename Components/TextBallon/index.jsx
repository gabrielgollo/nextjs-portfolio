import { Box, useColorModeValue } from '@chakra-ui/react'

export default function TextBallon () {
  return (
        <Box
          borderradius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('#FEFAF5', '#112031')}
          color={useColorModeValue('black.800', 'grey.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello there! I am a full stack developer!
        </Box>
  )
}
