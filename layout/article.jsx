import { Container, useColorModeValue } from "@chakra-ui/react"

export default function ArticleLayout({children}) {
    return (
        <Container 
            marginTop={10} 
            maxW="container.xl" 
            centerContent
            bg={useColorModeValue("#A7D0CD", "#112031")}
        >
            {children}
        </Container>
    )
}