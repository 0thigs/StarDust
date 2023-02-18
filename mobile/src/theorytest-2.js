import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import * as C from './styles';

import theme from '../../global/styles/theme';
import AlertIcon from '../../assets/GlobalAssets/alert-icon.svg';

import { Button } from '../../components/Button';
import { LessonHeader } from '../LessonHeader';
import { useLesson } from '../../hooks/useLesson';
import { theories } from '../../utils/theories';

import { Volume2 } from 'react-native-feather';

import RenderHTML from 'react-native-render-html';

import * as Speech from 'expo-speech';

export function Theory({ starId }) {
  const [, dispatch] = useLesson();
  const [texts, setTexts] = useState([]);
  const [currentText, setCurrentText] = useState([]);
  console.log(texts);
  const { width } = useWindowDimensions();
  const maxDelay = 10;
  const typing = 1;

  function getAnimation(index) {
    return index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight';
  }

  function handleContinueButton() {
    const newText = texts[3];
    setCurrentText(text => [...text, newText]);
  }

  function handlePracticeButton() {
    dispatch({ type: 'changeStage' });
  }

  async function handleSpeechButton(text) {
    const voices = await Speech.getAvailableVoicesAsync();
    console.log(voices);
    Speech.speak(text, {
      language: 'pt-BR',
    });
  }

  useEffect(() => {
    const textsFromJSON = theories.filter(theory => theory.starId === starId)[0].texts;
    setTexts(theories.filter(theory => theory.starId === starId)[0].texts)
  }, []);


  return (
    <C.Container>
      <LessonHeader />
      <C.Title animation={'fadeInDown'}>Introdução</C.Title>
      <C.Theories showsVerticalScrollIndicator={false}>
        {texts.map((theory, index) => (
          <C.Theory key={index}>
            {theory.type === 'default' && (
              <C.TextContainer animation={getAnimation(index)}>
                <C.EmphasisText typing={typing} maxDelay={maxDelay}>
                  <C.SpeechButton onPress={() => handleSpeechButton(theory.body)}>
                    <Volume2 width={25} height={25} color={theme.colors.blue_300} />
                  </C.SpeechButton>
                  {theory.body}
                </C.EmphasisText>
              </C.TextContainer>
            )}
            {theory.type === 'emphasis' && (
              <C.TextContainer animation={getAnimation(index)}>
                <C.EmphasisText>
                  <C.SpeechButton onPress={() => handleSpeechButton(theory.body)}>
                    <Volume2 width={25} height={25} color={theme.colors.blue_300} />
                  </C.SpeechButton>
                  {theory.body}
                </C.EmphasisText>
              </C.TextContainer>
            )}
            {theory.type === 'alert' && (
              <C.TextContainer animation={getAnimation(index)}>
                <AlertIcon />
                <C.AlertText>
                  <C.SpeechButton onPress={() => handleSpeechButton(theory.body)}>
                    <Volume2 width={25} height={25} color={theme.colors.black} />
                  </C.SpeechButton>
                  {theory.body}
                </C.AlertText>
              </C.TextContainer>
            )}
            {theory.type === 'example' && (
              <C.ExampleTextContainer animation={getAnimation(index)}>
                <C.ExempleTextTitle>Exemplo</C.ExempleTextTitle>
                <C.ExempleText>
                  <RenderHTML
                    contentWidth={width}
                    source={{
                      html: `
                        <pre style='; color: ${theme.colors.green_500};'>
                        ${theory.body}
                        </pre>
                    `,
                    }}
                  />
                </C.ExempleText>
              </C.ExampleTextContainer>
            )}
          </C.Theory>
        ))}
        <Button
          title={'Continuar'}
          onPress={handleContinueButton}
          color={theme.colors.black}
          background={theme.colors.green_500}
        />
      </C.Theories>
    </C.Container>
  );
}
