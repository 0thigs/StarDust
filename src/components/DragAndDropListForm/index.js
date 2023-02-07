import { useState, useEffect } from 'react';
import { useLesson } from '../../hooks/useLesson';

import { VerificationButton } from '../VerificationButton';
import { compareSenquences } from '../../utils/compareSenquences';

import * as C from './styles';

import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableFlatList, {
  ShadowDecorator,
  useOnCellActiveAnimation,
} from 'react-native-draggable-flatlist';

export function DragAndDropListForm({ items, correctItemsIdsSequence }) {
  const [, dispatch] = useLesson();
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isAnswerVerified, setIsAnswerVerified] = useState(false);
  const [isWrongCountAlreadyIncremented, setIsWrongCountAlreadyIncremented] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const ItemScale = useSharedValue(0.5);

  function handleVerifyAnswer() {
    setIsAnswerVerified(!isAnswerVerified);

    const userItemsIdSequence = currentItems.map(item => item.id);
    console.log({ userItemsIdSequence });
    console.log({ correctItemsIdsSequence });
    const areTheTwoSequencesEqual = compareSenquences(userItemsIdSequence, correctItemsIdsSequence);

    if (areTheTwoSequencesEqual) {
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
    setCurrentItems(items);
  }, [items]);

  useEffect(() => {
    ItemScale.value = withTiming(1, { duration: 500, easing: Easing.bounce });
  }, []);

  function renderItem({ item, drag }) {
    const { isActive } = useOnCellActiveAnimation();
    return (
      <ShadowDecorator>
        <C.ItemContainer onLongPress={drag} disabled={isAnswerVerified}>
          <C.Item
            style={ItemAnimatedStyle}
            isActive={isActive}
            isAnswerWrong={isAnswerWrong}
            isAnswerVerified={isAnswerVerified}
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
        isAnswerVerified={isAnswerVerified}
        isAnswered={!!items}
      />
    </C.Container>
  );
}
