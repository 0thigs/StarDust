import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import TypeWriter from 'react-native-typewriter';
import theme from '../../global/styles/theme';
import AlertIcon from '../../assets/GlobalAssets/alert-icon.svg';
import { Volume2, VolumeX } from 'react-native-feather';
import { Editor } from '../Editor';
import * as C from './styles';
import * as Speech from 'expo-speech';
import { useEffect } from 'react';

export function Text({ type, title, body, isRendered, isRunnable }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const navigation = useNavigation();
  const iconSize = 25;
  const iconColor =
    theme.colors[type === 'default' ? 'white' : type === 'alert' ? 'black' : 'blue_300'];

  function handleCodeButtonPress(body) {
    navigation.navigate('Playground', { id: null, code: body });
  }

  async function verifyIsSpeaking() {
    console.log(true);
    if (!(await Speech.isSpeakingAsync())) {
      setIsSpeaking(false);
    }
  }

  async function handleSpeechButton(text) {
    if (await Speech.isSpeakingAsync()) {
      setIsSpeaking(false);
      Speech.stop();
      return;
    }
    setIsSpeaking(true);
    Speech.speak(text);
  }

  useEffect(() => {
    verifyIsSpeaking();
  }, [Speech]);

  return (
    <C.Container type={type} animation={!isRendered ? 'fadeInLeft' : null}>
      {title && <C.Title>{title}</C.Title>}
      {type === 'alert' && <AlertIcon />}
      {type === 'code' ? (
        <>
          <C.Title>Exemplo</C.Title>
          {isRunnable && (
            <C.CodeButton onPress={() => handleCodeButtonPress(body)}>
              <C.CodeButtonTitle>Testar</C.CodeButtonTitle>
            </C.CodeButton>
          )}

          <C.Code horizontal>
            <Editor value={body} />
          </C.Code>
        </>
      ) : (
        <C.Body type={type}>
          <C.SpeechButton onPress={() => handleSpeechButton(body)}>
            {isSpeaking ? (
              <VolumeX width={iconSize} height={iconSize} color={iconColor} />
            ) : (
              <Volume2 width={iconSize} height={iconSize} color={iconColor} />
            )}
          </C.SpeechButton>
          <C.Text type={type}>
            {!isRendered ? (
              <TypeWriter typing={1} maxDelay={10}>
                {body}
              </TypeWriter>
            ) : (
              body
            )}
          </C.Text>
        </C.Body>
      )}
    </C.Container>
  );
}
