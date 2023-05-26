import { useEffect, useRef, useState } from 'react';
import { useLesson } from '../../hooks/useLesson';

import theme from '../../global/styles/theme';

import { Text } from '../Text';
import { Button } from '../Button';
import { Loading } from '../Loading';
import { FabButton } from '../FabButton';
import { Modal } from '../Modal';
import { LessonHeader } from '../LessonHeader';

import * as C from './styles';

export function Theory({ title, allTexts }) {
  const [, dispatch] = useLesson();
  const [texts, setTexts] = useState([]);
  const [nextTextIndex, setNextTextIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isFabButtonVisible, setIsFabButtonVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isScrollToEnd, setIsScrollToEnd] = useState(true);
  const scrollRef = useRef(null);

  function fixValue(value) {
    return Math.floor(value);
  }

  function scrollToEnd() {
    scrollRef.current.scrollToEnd();
  }

  function handleContinueButton() {
    if (!allTexts[nextTextIndex]) return;
    scrollToEnd();

    setNextTextIndex(index => index + 1);
    setTexts(texts => {
      const previousTexts = texts.map(text => ({ ...text, isRendered: true }));
      const nextText = allTexts[nextTextIndex];
      return [...previousTexts, nextText];
    });
  }

  function handleScroll({ contentOffset, contentSize, layoutMeasurement }) {
    const isScrollToEnd =
      fixValue(contentOffset.y) + fixValue(layoutMeasurement.height) >=
      fixValue(contentSize.height) - C.minHeightText + 25;
    setIsScrollToEnd(isScrollToEnd);
    setIsFabButtonVisible(!isScrollToEnd);
  }

  useEffect(() => {
    setTexts([{ ...allTexts[0], isRendered: false }]);
    setIsLoading(false);
  }, []);

  useEffect(() => {}, [texts]);

  return (
    <C.Container>
      <LessonHeader />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <C.Title animation={'fadeInDown'}>{title}</C.Title>
          <C.Theories
            showsVerticalScrollIndicator={false}
            ref={scrollRef}
            onScroll={event => handleScroll(event.nativeEvent)}
            onContentSizeChange={isScrollToEnd && scrollToEnd}
          >
            {texts.map(({ type, title, body, isRendered, isRunnable }, index) => (
              <Text
                key={`text-${index}`}
                type={type}
                title={title}
                body={body}
                isRendered={isRendered}
                isRunnable={isRunnable}
                index={index}
              />
            ))}
          </C.Theories>
          <C.ButtonContainer>
            <Button
              title={nextTextIndex >= allTexts.length ? 'Praticar' : 'Continuar'}
              onPress={
                nextTextIndex >= allTexts.length
                  ? () => setIsModalVisible(true)
                  : handleContinueButton
              }
              color={theme.colors.black}
              background={theme.colors.green_500}
            />
          </C.ButtonContainer>
        </>
      )}

      {/* {isFabButtonVisible && (
        <FabButton
          onPress={scrollToEnd}
          icon={<Icon.ArrowDown color={theme.colors.green_300} fontSize={20} />}
        />
      )} */}

      <Modal
        isVisible={isModalVisible}
        type={'asking'}
        title={'Bora praticar o que você aprendeu?'}
        body={null}
        footer={
          <Button
            title={'Praticar'}
            color={theme.colors.black}
            background={theme.colors.green_500}
            onPress={() => dispatch({ type: 'showQuiz' })}
          />
        }
      />
    </C.Container>
  );
}
