import { useState, useEffect, useRef } from 'react';
import * as C from './styles';
import { useLesson } from '../../hooks/useLesson';

import { DropItem } from '../DropItem';
import { DropZone } from '../DropZone';
import { VerificationButton } from '../VerificationButton';
import { compareSenquences } from '../../utils/compareSenquences';
import { reorderItems } from '../../utils/reorderItems';

export function DragAndDropClickForm({ lines, dropItems, correctItemsIdsSequence }) {
  const [, dispatch] = useLesson();
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isAnswerVerified, setIsAnswerVerified] = useState(false);
  const [isWrongCountAlreadyIncremented, setIsWrongCountAlreadyIncremented] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [reorderedItems, setReorderedItems] = useState([]);
  const [zones, setZones] = useState([]);
  const totalDropZones = lines.reduce(
    (total, line) => (total += line.texts.includes('dropZone') ? 1 : 0),
    0
  );

  function handleVerifyAnswer() {
    setIsAnswerVerified(!isAnswerVerified);

    const userItemsIdsSequence = zones.map(zone => zone.itemId);
    const areTheTwoSequencesEqual = compareSenquences(
      userItemsIdsSequence,
      correctItemsIdsSequence
    );

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

  useEffect(() => {
    reorderItems(dropItems, setReorderedItems);
  }, []);

  return (
    <C.Container>
      <C.Lines>
        {lines.map(({ id, texts, indentLevel }) => (
          <C.Line key={id} indentLevel={indentLevel}>
            {texts.map((text, index) => (
              <C.Content key={index}>
                <C.Text>{text !== 'dropZone' && text}</C.Text>
                {text === 'dropZone' && (
                  <DropZone
                    key={id}
                    id={id}
                    zones={zones}
                    setZones={setZones}
                    totalDropZones={totalDropZones}
                  />
                )}
              </C.Content>
            ))}
          </C.Line>
        ))}
      </C.Lines>

      <C.DropItems>
        {reorderedItems.map(({ id, label }) => (
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
