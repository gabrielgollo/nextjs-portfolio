import { Box, Button, Heading, SliderFilledTrack, SliderTrack, Slider, SliderMark, SliderThumb, Stack, Text, Textarea, Input } from '@chakra-ui/react'
import React from 'react'
import ArticleLayout from '../../layout/article'

export default function GenerateWord () {
  const [sliderValue, setSliderValue] = React.useState(50)
  const [generateWords, setGenerateWords] = React.useState([])
  const generateWordNumbersRef = React.createRef()
  const textAreaRef = React.createRef()

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const generateWord = () => {
    const inputedText = textAreaRef.current.value
    const words = inputedText.split(' ')
    let result = ''
    for (let j = 0; j < sliderValue; j++) {
      result += words[randomNumber(0, words.length)]
    }
    return result
  }

  const generateWordsArray = () => {
    const generateWordsNumbers = generateWordNumbersRef.current.value
    const wordsArray = []
    for (let i = 0; i < generateWordsNumbers; i++) {
      wordsArray.push(generateWord())
    }
    setGenerateWords(wordsArray)
  }

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm'
  }

  return (
        <ArticleLayout>
            <Stack
                direction={{ base: 'column', sm: 'column' }}
                display={{ base: 'none', sm: 'flex' }}
                width={{ base: 'full', sm: 'auto' }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, sm: 0 }}
                justify="space-around"
                fontWeight={500}
            >

                <Heading as={'h1'}>Generate Word</Heading>
                <Text>Paste your text here</Text>
                <Textarea ref={textAreaRef} width={400}></Textarea>
                <Text>Group how many words?</Text>
                <Box
                    pt={6}
                    pb={2}
                    width="100%"
                    height="100%"
                    margin = "auto"
                >

                    <Slider
                        aria-label='slider-ex-6'
                        onChange={(val) => setSliderValue(val)}
                        defaultValue={sliderValue}
                        step={1}
                        min={1}
                        max={5}
                    >
                        <SliderMark value={1} {...labelStyles}>
                            1
                        </SliderMark>
                        <SliderMark value={2} {...labelStyles}>
                            2
                        </SliderMark>
                        <SliderMark value={3} {...labelStyles}>
                            3
                        </SliderMark>
                        <SliderMark value={4} {...labelStyles}>
                            4
                        </SliderMark>
                        <SliderMark value={5} {...labelStyles}>
                            5
                        </SliderMark>
                        <SliderMark
                            value={sliderValue}
                            textAlign='center'
                            bg='blue.500'
                            color='white'
                            mt='-10'
                            ml='-5'
                            w='12'
                        >
                        {sliderValue}
                        </SliderMark>
                        <SliderTrack>
                        <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Box>

                <Text>How much words?</Text>
                <Input ref={generateWordNumbersRef} type={'number'} defaultValue={10} width={90}></Input>
                <Button marginTop={10} onClick={generateWordsArray}>Generate!</Button>

                {
                    generateWords.length > 0 && (
                        <Text>Generated Words:</Text>
                    )
                }
                {generateWords.map((word, index) => {
                  return <Text key={index}>{word}</Text>
                })}
            </Stack>
        </ArticleLayout>
  )
}
