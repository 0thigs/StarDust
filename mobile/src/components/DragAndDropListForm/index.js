import { useState, useEffect } from 'react';
import { useLesson } from '../../hooks/useLesson';

import { compareSenquences } from '../../utils/compareSenquences';
import { reorderItems } from '../../utils/reorderItems';

import * as C from './styles';

import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableFlatList, {
  ShadowDecorator,
  useOnCellActiveAnimation,
} from 'react-native-draggable-flatlist';
import { QuestionStem } from '../Quiz/styles';
import { List } from 'react-native-feather';
import theme from '../../global/styles/theme';

export function DragAndDropListForm({ index, stem, items }) {
  const [{ isAnswerVerified, isAnswerWrong, currentQuestion }, dispatch] = useLesson();
  const [isWrongCountAlreadyIncremented, setIsWrongCountAlreadyIncremented] = useState(false);
  const [reorderedItems, setReorderedItems] = useState([]);
  const ItemScale = useSharedValue(0.5);
  const correctItemsIdsSequence = items.map(item => item.id);
  const isCurrentQuestion = index === currentQuestion;

  function setIsAnswerVerified(value) {
    dispatch({ type: 'setState', payload: { prop: 'isAnswerVerified', value } });
  }

  function setIsAnswerWrong(value) {
    dispatch({ type: 'setState', payload: { prop: 'isAnswerWrong', value } });
  }

  function isUserAnswerCorrect() {
    const userItemsIdSequence = reorderedItems.map(item => item.id);
    return compareSenquences(userItemsIdSequence, correctItemsIdsSequence);
  }

  function handleVerifyAnswer() {
    setIsAnswerVerified(!isAnswerVerified);

    if (isUserAnswerCorrect()) {
      setIsAnswerWrong(false);

      if (isAnswerVerified) {
        dispatch({ type: 'changeQuestion' });
      }
      return;
    }

    setIsAnswerWrong(true);
    if (isAnswerVerified && !isWrongCountAlreadyIncremented) {
      dispatch({ type: 'incrementWrongsCount' });
      setIsWrongCountAlreadyIncremented(true);
    }
    if (isAnswerVerified) dispatch({ type: 'decrementLivesCount' });
  }

  const ItemAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: ItemScale.value }],
    };
  });

  useEffect(() => {
    reorderItems(items, setReorderedItems);
    ItemScale.value = withTiming(1, { duration: 500, easing: Easing.bounce });
  }, []);

  useEffect(() => {
    if (index === currentQuestion) {
      dispatch({
        type: 'setState',
        payload: { prop: 'verifyAnswer', value: handleVerifyAnswer },
      });

      dispatch({ type: 'setState', payload: { prop: 'isAnswered', value: true } });
    }
  }, [isAnswerVerified, reorderedItems]);

  function renderItem({ item, drag }) {
    const { isActive } = useOnCellActiveAnimation();
    return (
      <ShadowDecorator>
        <C.ItemContainer onLongPress={drag} disabled={isAnswerVerified}>
          <C.Item style={ItemAnimatedStyle} isActive={isActive}>
            <C.Label
              isAnswerWrong={isAnswerVerified && isAnswerWrong}
              isCorrectAnswer={isAnswerVerified && !isAnswerWrong && isUserAnswerCorrect()}
            >
              {item.label}
            </C.Label>
            <List
              color={
                theme.colors[
                  isAnswerVerified && isAnswerWrong
                    ? 'red_700'
                    : isAnswerVerified && !isAnswerWrong && isUserAnswerCorrect()
                    ? 'green_500'
                    : 'blue_300'
                ]
              }
            />
          </C.Item>
        </C.ItemContainer>
      </ShadowDecorator>
    );
  }

  useEffect(() => {
    if (isCurrentQuestion) {
      dispatch({ type: 'setState', payload: { prop: 'isAnswered', value: !!items } });
    }
  }, [items]);

  useEffect(() => {
    if (isCurrentQuestion) {
      dispatch({
        type: 'setState',
        payload: { prop: 'verifyAnswer', value: handleVerifyAnswer },
      });
    }
  }, [isAnswerVerified, items]);

  return (
    <C.Container>
      {isCurrentQuestion && (
        <>
          <QuestionStem animation={'fadeInDown'}>{stem}</QuestionStem>
          <GestureHandlerRootView>
            <DraggableFlatList
              data={reorderedItems}
              keyExtractor={item => item.id}
              onDragEnd={({ data }) => setReorderedItems(data)}
              renderItem={renderItem}
              containerStyle={{ alignItems: 'center' }}
            />
          </GestureHandlerRootView>
        </>
      )}
    </C.Container>
  );
}
