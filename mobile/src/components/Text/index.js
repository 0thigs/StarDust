import { useState, useMemo, memo, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Volume2, VolumeX } from 'react-native-feather';
import { Editor } from '../Editor';

import TypeWriter from 'react-native-typewriter';
import theme from '../../global/styles/theme';
import AlertIcon from '../../assets/GlobalAssets/alert-icon.svg';

import * as C from './styles';
import * as Speech from 'expo-speech';
const iconSize = 25;

function TextComponent({ type, title, content, isRendered, isRunnable }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const navigation = useNavigation();
  const iconColor =
    theme.colors[type === 'default' ? 'white' : type === 'alert' ? 'black' : 'blue_300'];

  function handleCodeButtonPress(content) {
    navigation.navigate('Playground', { id: null, code: content });
  }

  function getCodeHeigth(code) {
    const lines = code.split('\n').length;
    return lines * (lines > 10 ? 22 : 28) + (isRunnable ? 64 : 12);
  }

  const codeHeigth = useMemo(() => {
    if (type === 'code') return getCodeHeigth(content);
  }, []);

  async function handleSpeechButton(text) {
    if (await Speech.isSpeakingAsync()) {
      setIsSpeaking(false);
      Speech.stop();
      return;
    }
    Speech.speak(text, {
      onDone: () => setIsSpeaking(false),
      onStopped: () => setIsSpeaking(false),
      onStart: () => setIsSpeaking(true),
    });
  }

  return (
    <C.Container type={type} animation={!isRendered ? 'fadeInLeft' : null}>
      {title && <C.Title>{title}</C.Title>}
      {type === 'alert' && <AlertIcon />}
      {type === 'code' ? (
        <>
          <C.Title>Exemplo</C.Title>
          {isRunnable && (
            <C.CodeButton onPress={() => handleCodeButtonPress(content)} activeOpacity={0.7}>
              <C.CodeButtonTitle>Executar</C.CodeButtonTitle>
            </C.CodeButton>
          )}

          <C.Code horizontal keyboardShouldPersistTaps={'always'} style={{ height: codeHeigth }}>
            <Editor value={content} />
          </C.Code>
        </>
      ) : type !== 'image' ? (
        <C.Content type={type}>
          <C.SpeechButton onPress={() => handleSpeechButton(content)}>
            {isSpeaking ? (
              <VolumeX width={iconSize} height={iconSize} color={iconColor} />
            ) : (
              <Volume2 width={iconSize} height={iconSize} color={iconColor} />
            )}
          </C.SpeechButton>
          <C.Text type={type}>
            {!isRendered ? (
              <TypeWriter typing={1} maxDelay={5}>
                {content}
              </TypeWriter>
            ) : (
              content
            )}
          </C.Text>
        </C.Content>
      ) : null}
    </C.Container>
  );
}

export const Text = memo(TextComponent)