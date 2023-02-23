import { useEffect, useRef, useState } from 'react';
import { useLesson } from '../../hooks/useLesson';

import theme from '../../global/styles/theme';

import { Text } from '../Text';
import { Button } from '../Button';
import { FabButton } from '../FabButton';
import { Modal } from '../Modal';
import { LessonHeader } from '../LessonHeader';
import { theories } from '../../utils/theories';
import { planets } from '../../utils/planets';

import * as Speech from 'expo-speech';
import * as Icon from 'react-native-feather';
import * as C from './styles';

export function Theory({ starId }) {
  const [, dispatch] = useLesson();
  const [texts, setTexts] = useState([]);
  const [index, setIndex] = useState(1);
  const [isFabButtonShown, setIsFabButtonShown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const scrollRef = useRef();
  const textsFromJSON = theories.filter(theory => theory.starId === starId)[0].texts;
  const starName = planets
    .find(planet => planet.stars.some(star => star.id === starId))
    .stars.find(star => star.id === starId).name;

  function fixValue(value) {
    return Math.floor(value);
  }

  function scrollToEnd() {
    scrollRef.current.scrollToEnd();
  }

  function handleContinueButton() {
    if (!textsFromJSON[index]) return;

    setIndex(index => index + 1);
    setTexts(texts => {
      const previousTexts = texts.map(text => ({ ...text, isRendered: true }));
      const nextText = textsFromJSON[index];
      return [...previousTexts, nextText];
    });
  }

  function handleScroll({ contentOffset, contentSize, layoutMeasurement }) {
    setIsScrollEnd(
      fixValue(contentOffset.y) + fixValue(layoutMeasurement.height) >=
        fixValue(contentSize.height) - C.minHeightText + 50
    );
    setIsFabButtonShown(!isScrollEnd);
  }

  async function handleSpeechButton(text) {
    if (await Speech.isSpeakingAsync()) {
      Speech.stop();
      return;
    }
    Speech.speak(text);
  }

  useEffect(() => {
    setTexts([{ ...textsFromJSON[0], isRendered: false }]);
  }, []);

  return (
    <C.Container>
      <LessonHeader />
      <C.Title animation={'fadeInDown'}>{starName}</C.Title>
      <C.Theories
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
        onScroll={event => handleScroll(event.nativeEvent)}
        onContentSizeChange={isScrollEnd && scrollToEnd}
      >
        {texts.map(({ type, title, body, isRendered }, index) => (
          <Text
            key={`text-${index}`}
            type={type}
            title={title}
            body={body}
            isRendered={isRendered}
          />
        ))}

        <Button
          title={index >= textsFromJSON.length ? 'Praticar' : 'Continuar'}
          onPress={
            index >= textsFromJSON.length ? () => setIsModalOpen(true) : handleContinueButton
          }
          color={theme.colors.black}
          background={theme.colors.green_500}
        />
      </C.Theories>
      {isFabButtonShown && (
        <FabButton
          onPress={scrollToEnd}
          icon={<Icon.ArrowDown color={theme.colors.green_300} fontSize={20} />}
        />
      )}

      <Modal
        isOpen={isModalOpen}
        type={'asking'}
        title={'Bora praticar o que você aprendeu?'}
        body={null}
        footer={
          <Button
            title={'Praticar'}
            color={theme.colors.black}
            background={theme.colors.green_500}
            onPress={() => dispatch({ type: 'changeStage' })}
          />
        }
      />
    </C.Container>
  );
}
