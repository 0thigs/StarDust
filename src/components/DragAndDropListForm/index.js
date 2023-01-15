import { useState, useEffect } from 'react';
import * as C from './styles';
import { VerificationButton } from '../VerificationButton';
import { useLesson } from '../../hooks/useLesson';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import DraggableFlatList, {
  OpacityDecorator,
  ScaleDecorator,
  ShadowDecorator,
} from 'react-native-draggable-flatlist';

export function DragAndDropListForm() {
  const [state, dispatch] = useLesson();
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isIncremented, setIsncremented] = useState(false);
  const [items, setItems] = useState(state.questions[state.currentQuestion].items);
  const ItemScale = useSharedValue(0.5);
  const correctItemsSequence = state.questions[state.currentQuestion].correctItemsSequence;

  function compareSequences(sequence1, sequence2) {
    return JSON.stringify(sequence1) === JSON.stringify(sequence2);
  }

  function handleVerifyAnswer() {
    setIsVerified(!isVerified);

    const userItemsSequence = items.map(item => item.id);
    const areTheTwoSequencesEqual = compareSequences(userItemsSequence, correctItemsSequence);

    if (areTheTwoSequencesEqual) {
      setIsAnswerWrong(false);

      if (isVerified) {
        dispatch({ type: 'changeQuestion' });
      }
      return;
    }

    setIsAnswerWrong(true);
    if (isVerified && !isIncremented) {
      dispatch({ type: 'incrementWrongsCount' });
      setIsncremented(true);
    }
    if (isVerified) dispatch({ type: 'decrementLivesCount' });
  }

  const ItemAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: ItemScale.value }],
    };
  });

  useEffect(() => {
    const currentItems = state.questions[state.currentQuestion].items;
    if (currentItems) setItems(currentItems);
  }, [state.currentQuestion]);

  useEffect(() => {
    ItemScale.value = withTiming(1, { duration: 500, easing: Easing.bounce });
  }, []);

  function renderItem({ item, drag }) {
    return (
      <ScaleDecorator>
        <OpacityDecorator>
          <ShadowDecorator>
            <C.ItemContainer onLongPress={drag} disabled={isVerified}>
              <C.Item
                style={ItemAnimatedStyle}
                isAnswerWrong={isAnswerWrong}
                isVerified={isVerified}
              >
                <C.Decorator>:</C.Decorator>
                <C.Label>{item.label}</C.Label>
                <C.Decorator>:</C.Decorator>
              </C.Item>
            </C.ItemContainer>
          </ShadowDecorator>
        </OpacityDecorator>
      </ScaleDecorator>
    );
  }

  return (
    <C.Container>
      <GestureHandlerRootView>
        <DraggableFlatList
          data={items}
          keyExtractor={item => item.id}
          onDragEnd={({ data }) => setItems(data)}
          renderItem={renderItem}
          containerStyle={{ alignItems: 'center' }}
        />
      </GestureHandlerRootView>

      <VerificationButton
        verifyAnswer={handleVerifyAnswer}
        isAnswerWrong={isAnswerWrong}
        isVerified={isVerified}
        isAnswered={!!items}
      />
    </C.Container>
  );
}
