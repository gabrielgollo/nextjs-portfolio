import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const styles = {
  global: props => ({
    body: {
      bg: mode("#345B63", "#282c57")(props) // Body Background Color
    }
  }),
}

const theme = extendTheme({ config, styles })
export default theme

export { theme }