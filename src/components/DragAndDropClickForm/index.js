import { useState, useEffect, useRef } from 'react';
import * as C from './styles';
import { useLesson } from '../../hooks/useLesson';

import { DropItem } from '../DropItem';
import { DropZone } from '../DropZone';
import { VerificationButton } from '../VerificationButton';
import { compareSequences } from '../../utils/compareSequences';
import { FadeInLeft } from 'react-native-reanimated';

export function DragAndDropClickForm({ lines, dropItems, correctItemsIdsSequence }) {
  const [, dispatch] = useLesson();
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isAnswerVerified, setIsAnswerVerified] = useState(false);
  const [isWrongCountAlreadyIncremented, setIsWrongCountAlreadyIncremented] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [zones, setZones] = useState([]);
  const totalDropZones = lines.reduce((total, line) => (total += line.dropZone ? 1 : 0), 0);

  function handleVerifyAnswer() {
    setIsAnswerVerified(!isAnswerVerified);

    const userItemsIdsSequence = zones.map(zone => zone.itemId);
    const areTheTwoSequencesEqual = compareSequences(userItemsIdsSequence, correctItemsIdsSequence);

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

  useEffect(() => {
    if (zones.length > 0) {
      const areAllZonesFilled = zones.every(zone => zone.itemId !== null);
      setIsAnswered(areAllZonesFilled);
    }
  }, [zones]);

  return (
    <C.Container>
      <C.Lines >
        {lines.map(({ id, text, indentLevel, dropZone }) => (
          <C.Line key={id} indentLevel={indentLevel}>
            {dropZone && !dropZone.isEndLine && (
              <DropZone
                id={dropZone.id}
                zones={zones}
                setZones={setZones}
                totalDropZones={totalDropZones}
              />
            )}
            <C.Text>{text}</C.Text>
            {dropZone && dropZone.isEndLine && (
              <DropZone
                id={dropZone.id}
                zones={zones}
                setZones={setZones}
                totalDropZones={totalDropZones}
              />
            )}
          </C.Line>
        ))}
      </C.Lines>

      <C.DropItems>
        {dropItems.map(({ id, label }) => (
          <DropItem
            key={id}
            id={id}
            label={label}
            zones={zones}
            setZones={setZones}
            totalDropZones={totalDropZones}
            isAnswerVerified={isAnswerVerified}
          />
        ))}
      </C.DropItems>

      <VerificationButton
        verifyAnswer={handleVerifyAnswer}
        isAnswerWrong={isAnswerWrong}
        isAnswerVerified={isAnswerVerified}
        isAnswered={isAnswered}
      />
    </C.Container>
  );
}
