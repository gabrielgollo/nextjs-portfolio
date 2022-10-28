import { Container, useColorModeValue } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function ArticleLayout ({ children }) {
  return (
        <Container
            marginTop={10}
            maxW="30em"
            centerContent
            color={useColorModeValue('black', 'gray.200')}
        >
            {children}
        </Container>
  )
}

ArticleLayout.propTypes = {
  children: PropTypes.node
}
