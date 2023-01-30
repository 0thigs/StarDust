import { useState, useEffect } from 'react';
import * as C from './styles';
import { VerificationButton } from '../VerificationButton';
import { useLesson } from '../../hooks/useLesson';

import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export function DragAndDropClickForm({ lines, dropItems, correctItemsSequence }) {
  const [, dispatch] = useLesson();
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isIncremented, setIsncremented] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);

  //   const offsets = lines.map(({ dropZone }) => {
  //     if (dropZone) {
  //         return
  //     }
  //   });

  const zonesOffsets = [];

  function handleVerifyAnswer() {}

    // useEffect(() => {
    //   console.log(zonesOffsets);
    // }, [zonesOffsets]);

  return (
    <C.Container>
      <C.Lines>
        {lines.map(({ id, text, indentLevel, dropZone }) => (
          <C.Line key={id} indentLevel={indentLevel}>
            {dropZone && !dropZone.isEndLine && <C.DropZone></C.DropZone>}
            <C.Text>{text}</C.Text>
            {dropZone && dropZone.isEndLine && (
              <C.DropZone
                onLayout={event => {
                  const layout = event.nativeEvent.layout;
                  zonesOffsets.push({ id: dropZone.id, x: layout.x, y: layout.y });
                  console.log(zonesOffsets);
                }}
              ></C.DropZone>
            )}
          </C.Line>
        ))}
      </C.Lines>

      <C.DropItems>
        {dropItems.map(({ id, label }) => (
          <C.DropItem key={id} activeOpacity={0.7}>
            <C.Label>{label}</C.Label>
          </C.DropItem>
        ))}
      </C.DropItems>

      <VerificationButton
        verifyAnswer={handleVerifyAnswer}
        isAnswerWrong={isAnswerWrong}
        isVerified={isVerified}
      />
    </C.Container>
  );
}
