import { useState, useEffect, useRef } from 'react';
import * as C from './styles';
import { useLesson } from '../../hooks/useLesson';

import { DropItem } from '../DropItem';
import { DropZone } from '../DropZone';
import { VerificationButton } from '../VerificationButton';
import { compareSenquences } from '../../utils/compareSenquences';
import { reorderItems } from '../../utils/reorderItems';
import { QuestionStem } from '../Quiz/styles';

export function DragAndDropClickForm({ stem, lines, dropItems, correctItemsIdsSequence, index }) {
  const [{ isAnswerVerified, isAnswerWrong, currentQuestion }, dispatch] = useLesson();
  const [isWrongCountAlreadyIncremented, setIsWrongCountAlreadyIncremented] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [reorderedItems, setReorderedItems] = useState([]);
  const [_lines, setLines] = useState([]);
  const [zones, setZones] = useState([]);
  const totalDropZones = lines.reduce(
    (total, line) => (total += line.texts.includes('dropZone') ? 1 : 0),
    0
  );
  const isCurrentQuestion = index === currentQuestion;

  function setIsAnswerVerified(value) {
    dispatch({ type: 'setState', payload: { prop: 'isAnswerVerified', value } });
  }

  function setIsAnswerWrong(value) {
    dispatch({ type: 'setState', payload: { prop: 'isAnswerWrong', value } });
  }

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
        setZones([]);
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
    if (zones.length > 0 && isCurrentQuestion) {
      const areAllZonesFilled = zones.every(zone => zone.itemId !== null);
      dispatch({ type: 'setState', payload: { prop: 'isAnswered', value: areAllZonesFilled } });
    }
  }, [zones]);

  useEffect(() => {
    reorderItems(dropItems, setReorderedItems);
  }, [dropItems]);

  useEffect(() => {
    setLines(lines);
  }, [lines]);

  useEffect(() => {
    if (isCurrentQuestion) {
      dispatch({
        type: 'setState',
        payload: { prop: 'verifyAnswer', value: handleVerifyAnswer },
      });
    }
  }, [isAnswerVerified, zones]);

  return (
    <C.Container>
      {isCurrentQuestion && (
        <>
          <QuestionStem animation={'fadeInDown'}>{stem}</QuestionStem>
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
                        isAnswerWrong={isAnswerWrong && isAnswerVerified}
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
                reorderedItems={reorderedItems}
                isAnswerVerified={isAnswerVerified}
                isAnswerWrong={isAnswerWrong && isAnswerVerified}
              />
            ))}
          </C.DropItems>
        </>
      )}
    </C.Container>
  );
}
