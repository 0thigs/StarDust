import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import * as C from './styles';
import theme from '../../global/styles/theme';

import AlertIcon from '../../assets/GlobalAssets/alert-icon.svg';

import { Button } from '../../components/Button';
import { LessonHeader } from '../LessonHeader';
import { useLesson } from '../../hooks/useLesson';
import { theories } from '../../utils/theories';
import RenderHTML from 'react-native-render-html';

export function Theory() {
  const [state, dispatch] = useLesson();
  const [currentTheories, setCurrentTheories] = useState(theories[0].texts);
  const { width } = useWindowDimensions();

  function handlePracticeButton() {
    dispatch({ type: 'changeStage' });
  }

  function getAnimation(index) {
    return index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight';
  }

  return (
    <C.Container>
      <LessonHeader />
      <C.Title animation={'fadeInDown'}>Introdução</C.Title>
      <C.Theories showsVerticalScrollIndicator={false}>
        {currentTheories.map((theory, index) => (
          <C.Theory key={index}>
            {theory.type === 'default' && (
              <C.TextContainer animation={getAnimation(index)}>
                <C.DefaultText>{theory.body}</C.DefaultText>
              </C.TextContainer>
            )}
            {theory.type === 'alert' && (
              <C.TextContainer animation={getAnimation(index)}>
                <AlertIcon />
                <C.AlertText>{theory.body}</C.AlertText>
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
            {console.log(theory)}
          </C.Theory>
        ))}
        <Button title={'Praticar'} onPress={handlePracticeButton} />
      </C.Theories>
    </C.Container>
  );
}
