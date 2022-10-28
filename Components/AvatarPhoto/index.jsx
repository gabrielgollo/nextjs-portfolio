import Image from 'next/image'
import { Box, useColorModeValue } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function AvatarPhoto ({ photoUrl }) {
  return (
    <Box
      flexShrink={0}
      mt={{ base: 4, md: 0 }}
      ml={{ md: 6 }}
      textAlign="center"
    >
      <Box
        borderColor={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
        borderWidth={2}
        borderStyle="solid"
        w="100px"
        h="100px"
        display="inline-block"
        borderRadius="full"
        overflow="hidden"
      >
        <Image
          src={photoUrl}
          alt="Profile image"
          borderradius="full"
          width="100%"
          height="100%"
        />
      </Box>
    </Box>
  )
}

AvatarPhoto.propTypes = {
  photoUrl: PropTypes.string.isRequired
}
