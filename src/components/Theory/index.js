import { useEffect, useRef, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import * as C from './styles';

import theme from '../../global/styles/theme';
import AlertIcon from '../../assets/GlobalAssets/alert-icon.svg';

import { Button } from '../../components/Button';
import { LessonHeader } from '../LessonHeader';
import { useLesson } from '../../hooks/useLesson';
import { theories } from '../../utils/theories';

import { Volume2 } from 'react-native-feather';

import TypeWriter from 'react-native-typewriter';
import RenderHTML from 'react-native-render-html';

import * as Speech from 'expo-speech';

export function Theory({ starId }) {
  const [, dispatch] = useLesson();
  const [texts, setTexts] = useState([]);
  const [index, setIndex] = useState(1);
  const { width } = useWindowDimensions();
  const scrollRef = useRef()
  const maxDelay = 10;
  const typing = 1;
  const textsFromJSON = theories.filter(theory => theory.starId === starId)[0].texts;

  function handlePracticeButton() {
    dispatch({ type: 'changeStage' });
  }

  function handleContinueButton() {
    if (!textsFromJSON[index]) return;

    setIndex(index => index + 1);

    const previousText = texts.slice(-1);
    previousText.isRendered = true;
    setTexts(texts => {
      const previousTexts = texts.map(text => ({ ...text, isRendered: true }));
      const nextText = textsFromJSON[index];
      return [...previousTexts, nextText];
    });
  }

  async function handleSpeechButton(text) {
    Speech.speak(text);
  }

  useEffect(() => {
    setTexts([{ ...textsFromJSON[0], isRendered: false }]);
  }, []);

  return (
    <C.Container>
      <LessonHeader />
      <C.Title animation={'fadeInDown'}>Introdução</C.Title>
      <C.Theories
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
        onContentSizeChange={() => scrollRef.current.scrollToEnd()}
      >
        {texts.map((text, index) => (
          <C.Theory key={index}>
            {text.type === 'emphasis' && (
              <C.TextContainer animation={!text.isRendered ? 'fadeInLeft' : null}>
                <C.EmphasisText>
                  <C.SpeechButton onPress={() => handleSpeechButton(text.body)}>
                    <Volume2 width={25} height={25} color={theme.colors.blue_300} />
                  </C.SpeechButton>
                  {!text.isRendered ? (
                    <TypeWriter typing={typing} maxDelay={maxDelay}>
                      {text.body}
                    </TypeWriter>
                  ) : (
                    text.body
                  )}
                </C.EmphasisText>
              </C.TextContainer>
            )}
            {text.type === 'default' && (
              <C.TextContainer animation={!text.isRendered ? 'fadeInLeft' : null}>
                <C.DefaultText>
                  <C.SpeechButton onPress={() => handleSpeechButton(text.body)}>
                    <Volume2 width={25} height={25} color={theme.colors.white} />
                  </C.SpeechButton>
                  {!text.isRendered ? (
                    <TypeWriter typing={typing} maxDelay={maxDelay}>
                      {text.body}
                    </TypeWriter>
                  ) : (
                    text.body
                  )}
                </C.DefaultText>
              </C.TextContainer>
            )}
            {text.type === 'alert' && (
              <C.TextContainer animation={!text.isRendered ? 'fadeInLeft' : null}>
                <AlertIcon />
                <C.AlertText>
                  <C.SpeechButton onPress={() => handleSpeechButton(text.body)}>
                    <Volume2 width={25} height={25} color={theme.colors.black} />
                  </C.SpeechButton>
                  {!text.isRendered ? (
                    <TypeWriter typing={typing} maxDelay={maxDelay}>
                      {text.body}
                    </TypeWriter>
                  ) : (
                    text.body
                  )}
                </C.AlertText>
              </C.TextContainer>
            )}
            {text.type === 'example' && (
              <C.ExampleTextContainer animation={!text.isRendered ? 'fadeInLeft' : null}>
                <C.ExempleTextTitle>Exemplo</C.ExempleTextTitle>
                <C.ExempleText>
                  <RenderHTML
                    contentWidth={width}
                    source={{
                      html: `
                        <pre style='; color: ${theme.colors.green_500}; font-size: 12px'>
                        ${text.body}
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
          title={index >= textsFromJSON.length ? 'Praticar' : 'Continuar'}
          onPress={index >= textsFromJSON.length ? handlePracticeButton : handleContinueButton}
          color={theme.colors.black}
          background={theme.colors.green_500}
        />
      </C.Theories>
    </C.Container>
  );
}
