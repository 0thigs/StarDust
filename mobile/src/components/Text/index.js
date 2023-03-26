import { useState } from 'react';
import TypeWriter from 'react-native-typewriter';
import theme from '../../global/styles/theme';
import AlertIcon from '../../assets/GlobalAssets/alert-icon.svg';
import { Volume2, VolumeX } from 'react-native-feather';
import { Editor } from '../Editor';
import * as C from './styles';
import * as Speech from 'expo-speech';

const copy = `# h1 Heading 8-)

**This is some bold text!**

This is normal text
`;

export function Text({ type, title, body, isRendered }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const iconSize = 25;
  const iconColor =
    theme.colors[type === 'default' ? 'white' : type === 'alert' ? 'black' : 'blue_300'];

  async function handleSpeechButton(text) {
    if (await Speech.isSpeakingAsync()) {
      setIsSpeaking(false);
      Speech.stop();
      return;
    }
    setIsSpeaking(true);
    Speech.speak(text);
  }

  return (
    <C.Container type={type} animation={!isRendered ? 'fadeInLeft' : null}>
      {title && <C.Title>{title}</C.Title>}
      {type === 'alert' && <AlertIcon />}
      {type === 'code' ? (
        <>
          <C.Title>Exemplo</C.Title>
          <C.Code>
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
          {!isRendered ? (
            <TypeWriter typing={1} maxDelay={10}>
              {body}
            </TypeWriter>
          ) : (
            body
          )}
        </C.Body>
      )}
    </C.Container>
  );
}
