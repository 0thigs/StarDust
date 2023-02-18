import React from 'react';
import * as C from './styles';
import theme from '../../global/styles/theme';
import TypeWriter from 'react-native-typewriter';
import AlertIcon from '../../assets/GlobalAssets/alert-icon.svg';

import { Volume2 } from 'react-native-feather';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/styles/prism';

const maxDelay = 10;
const typing = 1;

export function Text({ type, title, body, isRendered }) {
  return (
    <C.Container type={type} animation={!isRendered ? 'fadeInLeft' : null}>
      {type === 'alert' && <AlertIcon />}
      {title && <C.Title>{title}</C.Title>}
      {type === 'code' ? (
        <>
          <C.Title>Exemplo</C.Title>
          <SyntaxHighlighter language="javascript" style={okaidia} highlighter={'prism'}>
            {body}
          </SyntaxHighlighter>
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
              <TypeWriter typing={typing} maxDelay={maxDelay}>
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
