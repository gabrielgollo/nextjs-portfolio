import { Button, Heading, Stack, Text, Textarea, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import React from 'react'
import ArticleLayout from '../../layout/article'

export default function GenerateWord () {
  const numberOfWordsToGroupRef = React.createRef()
  const [generatedWords, setGeneratedWords] = React.useState([])
  const generateWordNumbersRef = React.createRef()
  const textAreaRef = React.createRef()

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const generateWord = () => {
    const inputedText = textAreaRef.current.value
    const words = inputedText.split(' ')
    let result = ''
    for (let j = 0; j < numberOfWordsToGroupRef.current.querySelector('input').value; j++) {
      result += words[randomNumber(0, words.length)]
    }
    return result
  }

  const generateWordsArray = () => {
    const generateWordsNumbers = generateWordNumbersRef.current.querySelector('input').value
    const wordsArray = []
    for (let i = 0; i < generateWordsNumbers; i++) {
      wordsArray.push(generateWord())
    }
    setGeneratedWords(wordsArray)
    console.log(wordsArray)
  }

  return (
        <ArticleLayout>
            <Stack
                direction="column"
                alignItems="center"
                justify="space-around"
                fontWeight={500}
            >

                <Heading as={'h1'}>Generate Word</Heading>
                <Text>Paste your text here</Text>
                <Textarea ref={textAreaRef} width="100%" minWidth={270}></Textarea>
                <Text>Group how many words?</Text>

                <NumberInput ref={numberOfWordsToGroupRef} defaultValue={2} width={90}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>

                <Text>How much words?</Text>

                <NumberInput ref={generateWordNumbersRef} defaultValue={10} width={90}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>

                <Button marginTop={10} onClick={generateWordsArray}>Generate!</Button>

                {
                    generatedWords.length > 0 && (
                        <Text>Generated Words:</Text>
                    )
                }
                {generatedWords.map((word, index) => {
                  return <Text key={index}>{word}</Text>
                })}
            </Stack>
        </ArticleLayout>
  )
}
