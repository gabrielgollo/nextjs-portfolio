import { Box, Heading, Stack, Link, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import ArticleLayout from '../../layout/article'
import PropTypes from 'prop-types'
import Section from '../../Components/Section'

const paragraphStyle = {
  textAlign: 'justify',
  textIndent: '1em'
}

export default function Contact () {
  return (
    <ArticleLayout>
      <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" align='left'>
              Contact me
            </Heading>
          </Box>
        </Box>
      <Box display={{ md: 'flex' }} fontSize="md" fontWeight={500}>
        <Stack spacing={0} direction={'column'} align='center'>
          <Section delay={0.1}>
            <Text
              style={paragraphStyle}
            >
              These are my main social networks, feel free to contact me!
            </Text>
          </Section>

          <Stack direction={'row'} flexDirection='row' spacing={5}>
            <WidgetIcon link='https://www.linkedin.com/in/gabrielsgamaral/' icon="akar-icons:linkedin-box-fill" delay={0.3} />
            <WidgetIcon link='https://github.com/gabrielgollo' icon="akar-icons:github-fill" delay={0.4} />
            <WidgetIcon link='https://www.instagram.com/gabriel_gollo' icon="akar-icons:instagram-fill" delay={0.5} />
          </Stack>
        </Stack>

      </Box>
    </ArticleLayout>
  )
}

function WidgetIcon ({ link, icon, delay = 0.1 }) {
  return (
    <Section delay={delay}>
      <Box>
        <Link href={link} isExternal>
          <Icon width={40} height={40} icon={icon} />
        </Link>
      </Box>
    </Section>
  )
}

WidgetIcon.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.string,
  delay: PropTypes.number
}
