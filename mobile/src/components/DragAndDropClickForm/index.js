import { useState, useEffect } from 'react';
import * as C from './styles';
import { useLesson } from '../../hooks/useLesson';

import { DropItem } from '../DropItem';
import { DropZone } from '../DropZone';
import { compareSenquences } from '../../utils/compareSenquences';
import { reorderItems } from '../../utils/reorderItems';
import { QuestionStem } from '../Quiz/styles';

export function DragAndDropClickForm({ stem, lines, dropItems, correctItemsIdsSequence, index }) {
  const [{ isAnswerVerified, isAnswerWrong, currentQuestion }, dispatch] = useLesson();
  const [isWrongCountAlreadyIncremented, setIsWrongCountAlreadyIncremented] = useState(false);
  const [reorderedItems, setReorderedItems] = useState([]);
  const [linesWidth, setLinesWidth] = useState([]);
  const [zones, setZones] = useState([]);

  function getTotalDropZones(total, text) {
    return (total += text === 'dropZone' ? 1 : 0);
  }

  const totalDropZones = lines.reduce((total, line) => {
    return total + line.texts.reduce(getTotalDropZones, 0);
  }, 0);

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

  function registerLineWidth({ target }, id) {
    target.measure((x, y, width) => {
      if (linesWidth.length < lines.length) {
        setLinesWidth(linesWidth => [...linesWidth, { id, width }]);
        return;
      }

      setLinesWidth(linesWidth => linesWidth.map(line => (line.id === id ? { id, width } : line)));
    });
  }

  useEffect(() => {
    if (zones.length && isCurrentQuestion) {
      const areAllZonesFilled = zones.every(zone => zone.itemId !== null);
      dispatch({ type: 'setState', payload: { prop: 'isAnswered', value: areAllZonesFilled } });
    }
  }, [zones]);

  useEffect(() => {
     reorderItems(dropItems, setReorderedItems);
  }, [dropItems]);

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
          <QuestionStem>{stem}</QuestionStem>
          <C.Lines>
            {lines.map(({ id, texts, indentLevel }) => (
              <C.Line
                key={id}
                indentLevel={indentLevel}
                onLayout={event => registerLineWidth(event, id)}
              >
                {texts.map((text, index) => (
                  <C.Content key={index}>
                    <C.Text>{text !== 'dropZone' && text}</C.Text>
                    {text === 'dropZone' && (
                      <DropZone
                        key={index}
                        id={`${index}-${id}`}
                        zones={zones}
                        setZones={setZones}
                        totalDropZones={totalDropZones}
                        isAnswerWrong={isAnswerWrong && isAnswerVerified}
                        linesWidth={linesWidth}
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
