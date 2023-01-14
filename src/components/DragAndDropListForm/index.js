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

export function DragAndDropListForm({ items, correctItemsSequence }) {
  const [, dispatch] = useLesson();

  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [currentItems, setCurrentItems] = useState(items);

  function compareSequences(sequence1, sequence2) {
    return JSON.stringify(sequence1) === JSON.stringify(sequence2);
  }

  function handleVerifyAnswer() {
    setIsVerified(!isVerified);

    const userItemsSequence = currentItems.map(item => item.id);
    const areTheTwoSequencesEqual = compareSequences(userItemsSequence, correctItemsSequence);

    if (areTheTwoSequencesEqual) {
      setIsAnswerWrong(false);

      if (isVerified) {
        dispatch({ type: 'changeQuestion' });
      }
      return;
    }

    setIsAnswerWrong(true);
    dispatch({ type: 'setWrongsCount' });
  }

  function renderItem({ item, drag }) {
    return (
      <ScaleDecorator>
        <OpacityDecorator>
          <ShadowDecorator>
            <C.ItemContainer onLongPress={drag} disabled={isVerified}>
              <C.Item isAnswerWrong={isAnswerWrong} isVerified={isVerified}>
                <C.Decorator isAnswerWrong={isAnswerWrong} isVerified={isVerified}>
                  :
                </C.Decorator>
                <C.Label>{item.label}</C.Label>
                <C.Decorator isAnswerWrong={isAnswerWrong} isVerified={isVerified}>
                  :
                </C.Decorator>
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
        isAnswered={!!currentItems}
      />
    </C.Container>
  );
}
