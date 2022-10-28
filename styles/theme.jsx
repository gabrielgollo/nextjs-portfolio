import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const styles = {
  global: props => ({
    body: {
      bg: mode('#F0E9D8', '#110320')(props) // Body Background Color
    }
  })
}

const theme = extendTheme({ config, styles })
export default theme

export { theme }
