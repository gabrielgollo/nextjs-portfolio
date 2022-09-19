import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../layout/main"
import theme from "../styles/theme.jsx"

function WebConfig({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default WebConfig
