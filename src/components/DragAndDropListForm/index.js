import { useState, useEffect } from 'react';
import * as C from './styles';
import { VerificationButton } from '../VerificationButton';
import { useLesson } from '../../hooks/useLesson';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import DraggableFlatList, {
  ShadowDecorator,
  useOnCellActiveAnimation,
} from 'react-native-draggable-flatlist';

export function DragAndDropListForm({ items, correctItemsSequence }) {
  const [, dispatch] = useLesson();
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isIncremented, setIsncremented] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const ItemScale = useSharedValue(0.5);

  

  function compareSequences(sequence1, sequence2) {
    return JSON.stringify(sequence1) === JSON.stringify(sequence2);
  }

  function handleVerifyAnswer() {
    setIsVerified(!isVerified);

    const userItemsSequence = currentItems.map(item => item.id);
    console.log(userItemsSequence);
    console.log(correctItemsSequence);

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
    setCurrentItems(items);
  }, [items]);

  useEffect(() => {
    ItemScale.value = withTiming(1, { duration: 500, easing: Easing.bounce });
  }, []);

  function renderItem({ item, drag }) {
    const { isActive } = useOnCellActiveAnimation();
    return (
      <ShadowDecorator>
        <C.ItemContainer onLongPress={drag} disabled={isVerified}>
          <C.Item
            style={ItemAnimatedStyle}
            isActive={isActive}
            isAnswerWrong={isAnswerWrong}
            isVerified={isVerified}
          >
            <C.Decorator>:</C.Decorator>
            <C.Label>{item.label}</C.Label>
            <C.Decorator>:</C.Decorator>
          </C.Item>
        </C.ItemContainer>
      </ShadowDecorator>
    );
  }

  return (
    <C.Container>
      <GestureHandlerRootView>
        <DraggableFlatList
          data={currentItems}
          keyExtractor={item => item.id}
          onDragEnd={({ data }) => setCurrentItems(data)}
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
