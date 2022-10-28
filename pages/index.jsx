import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import ArticleLayout from '../layout/article'
import Section from '../Components/Section'
import { RubikCube } from '../Components/RubikCube'
import AvatarPhoto from '../Components/AvatarPhoto'
import Contact from './contact'
import TextBallon from '../Components/TextBallon'

export default function HomePageApp () {
  const paragraphStyle = {
    textAlign: 'justify',
    textIndent: '1em'
  }

  return (
    <ArticleLayout>
      <Section delay={0.1}>
          <RubikCube />
      </Section>
      <TextBallon />
      <Box
        title="page-content"
        color={useColorModeValue('black.800', 'grey.200')}
      >
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Gabriel Gollo
            </Heading>
            <p style={paragraphStyle}>Software Developer / Automation and Control Student / Gamer</p>
          </Box>
        </Box>
        <AvatarPhoto photoUrl="/images/gabrielgollo.png" />

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>

          <Text
            style={paragraphStyle}
          >
            Hi there! I&apos;m a control and automation engineering student and an enthusiast for testing new technologies.
          </Text>
          <Text style={paragraphStyle}>
            I can say that I love technology, programming, and innovation! Cause most of my time is spent studying IOT, eletrical engineering and programming.
            So I love understanding how things work haha
            Oh! And I love birds, so I&apos;ve 4 cockatiel.
          </Text>
          <Text style={paragraphStyle}>
            Interested? Take a look at my GitHub.  =)
          </Text>

        </Section>
        </Box>

        <Section delay={0.5}>
          <Contact />
        </Section>
    </ArticleLayout>
  )
}
