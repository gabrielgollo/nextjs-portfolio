import { Container } from "@chakra-ui/react"

function ArticleLayout({children}) {
    return function name(params) {
        return (
            <Container marginTop={10} maxW="container.xl" centerContent>
                {children}
            </Container>
        )
    }
}