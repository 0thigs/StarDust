import { useState, useEffect, useRef } from 'react';
import * as C from './styles';
import { useLesson } from '../../hooks/useLesson';
import { DragItem } from '../DragItem';
import { DropZone } from '../DropZone';
import { compareSenquences } from '../../utils/compareSenquences';
import { reorderItems } from '../../utils/reorderItems';
import { QuestionTitle } from '../Quiz/styles';

export function DragAndDropClickForm({ title, lines, dragItems, correctDragItemsIdsSequence, index }) {
  const [{ isAnswerVerified, isAnswerWrong, currentQuestion }, dispatch] = useLesson();
  const [isWrongCountAlreadyIncremented, setIsWrongCountAlreadyIncremented] = useState(false);
  const [reorderedItems, setReorderedItems] = useState([]);
  const [linesWidth, setLinesWidth] = useState([]);
  const [targetZone, setTargetZone] = useState(null);
  const zones = useRef([]);

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

    const userItemsIdsSequence = zones.current.map(zone => zone.itemId)
    const areTheTwoSequencesEqual = compareSenquences(
      userItemsIdsSequence,
      correctDragItemsIdsSequence
    );

    if (areTheTwoSequencesEqual) {
      setIsAnswerWrong(false);

      if (isAnswerVerified) {
        zones.current = [];
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
    if (zones.current.length && isCurrentQuestion) {
      const areAllZonesFilled = zones.current.every(zone => zone.itemId !== null);
      dispatch({ type: 'setState', payload: { prop: 'isAnswered', value: areAllZonesFilled } });
    }
  }, [zones.current]);

  useEffect(() => {
    reorderItems(dragItems, setReorderedItems);
  }, []);

  console.log(zones.current);

  useEffect(() => {
    if (isCurrentQuestion) {
      dispatch({
        type: 'setState',
        payload: { prop: 'verifyAnswer', value: handleVerifyAnswer },
      });
    }
  }, [isAnswerVerified, zones.current]);

  return (
    <C.Container>
      {isCurrentQuestion && (
        <>
          <QuestionTitle>{title}</QuestionTitle>
          <C.Lines>
            {lines.map(({ id, texts, indentation }) => (
              <C.Line
                key={id}
                indentation={indentation}
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
                        totalDropZones={totalDropZones}
                        targetZone={targetZone}
                        isAnswerWrong={isAnswerWrong && isAnswerVerified}
                        linesWidth={linesWidth}
                        setLinesWidth={setLinesWidth}
                      />
                    )}
                  </C.Content>
                ))}
              </C.Line>
            ))}
          </C.Lines>

          <C.DragItems>
            {reorderedItems.map(({ id, label }) => (
              <DragItem
                key={id}
                id={id}
                label={label}
                zones={zones}
                linesWidth={linesWidth}
                targetZone={targetZone}
                setTargetZone={setTargetZone}
                totalDropZones={totalDropZones}
                reorderedItems={reorderedItems}
                isAnswerVerified={isAnswerVerified}
                isAnswerWrong={isAnswerWrong && isAnswerVerified}
              />
            ))}
          </C.DragItems>
        </>
      )}
    </C.Container>
  );
}
