import { Container, useColorModeValue } from "@chakra-ui/react"

export default function ArticleLayout({children}) {
    return (
        <Container 
            marginTop={10} 
            maxW="container.xl" 
            centerContent
            color={useColorModeValue("gray.100", "gray.200")}
        >
            {children}
        </Container>
    )
}