import { Container, useColorModeValue } from "@chakra-ui/react"

export default function ArticleLayout({children}) {
    return (
        <Container 
            marginTop={10} 
            maxW="container.xl" 
            centerContent
            color={useColorModeValue("black", "gray.200")}
        >
            {children}
        </Container>
    )
}