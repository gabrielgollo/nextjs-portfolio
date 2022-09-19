import { extendTheme } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode";
import { mode } from "@chakra-ui/theme-tools"
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const styles = {
  global: props => ({
    body: {
      bg: mode("#345B63", "#2B2E4A")(props)
    }
  }),
}

const theme = extendTheme({ config, styles })
export default theme

export { theme }