import { useState } from 'react';
import * as C from './styles';
import { VerificationButton } from '../VerificationButton';
import { useLesson } from '../../hooks/useLesson';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableFlatList, {
  OpacityDecorator,
  ScaleDecorator,
  ShadowDecorator,
} from 'react-native-draggable-flatlist';
import { useEffect } from 'react';

export function DragAndDropListForm() {
  const [state, dispatch] = useLesson();
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isIncremented, setIsncremented] = useState(false);
  const [items, setItems] = useState(state.questions[state.currentQuestion].items);
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
      dispatch({ type: 'decrementLivesCount' });
      setIsncremented(true);
    }
  }

  useEffect(() => {
    const currentItems = state.questions[state.currentQuestion].items;
    if (currentItems) setItems(currentItems);
  }, [state.currentQuestion]);

  function renderItem({ item, drag }) {
    return (
      <ScaleDecorator>
        <OpacityDecorator>
          <ShadowDecorator>
            <C.ItemContainer onLongPress={drag} disabled={isVerified}>
              <C.Item isAnswerWrong={isAnswerWrong} isVerified={isVerified}>
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
