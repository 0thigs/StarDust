import * as C from './styles';
import TypeWriter from 'react-native-typewriter';
import theme from '../../global/styles/theme';
import AlertIcon from '../../assets/GlobalAssets/alert-icon.svg';

import { Volume2 } from 'react-native-feather';
import { Editor } from '../Editor';

export function Text({ type, title, body, isRendered }) {
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
            <Volume2
              width={25}
              height={25}
              color={
                theme.colors[type === 'default' ? 'white' : type === 'alert' ? 'black' : 'blue_300']
              }
            />
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
