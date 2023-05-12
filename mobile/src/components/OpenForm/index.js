import { useEffect, useState } from 'react';
import { useLesson } from '../../hooks/useLesson';
import { QuestionCode, QuestionStem } from '../Quiz/styles';
import { Editor } from '../Editor';
import { getCodeHeight } from '../../utils/getCodeHeight';
import * as C from './styles';

export function OpenForm({ stem, answer, code, index }) {
  const [{ isAnswerVerified, isAnswerWrong, currentQuestion }, dispatch] = useLesson();
  const [userAnswer, setUserAnswer] = useState('');
  const [isIncremented, setIsncremented] = useState(false);
  const isCurrentQuestion = index === currentQuestion;

  function setIsAnswerVerified(value) {
    dispatch({ type: 'setState', payload: { prop: 'isAnswerVerified', value } });
  }

  function setIsAnswerWrong(value) {
    dispatch({ type: 'setState', payload: { prop: 'isAnswerWrong', value } });
  }

  function resetAnswer() {
    if (isAnswerVerified && userAnswer) {
      setUserAnswer('');
      setIsAnswerWrong(false);
    }
  }

  function handleVerifyAnswer() {
    setIsAnswerVerified(!isAnswerVerified);
    resetAnswer();

    if (userAnswer.trim().toLowerCase() === answer.trim().toLowerCase()) {
      setIsAnswerWrong(false);

      if (isAnswerVerified) dispatch({ type: 'changeQuestion' });
      return;
    }

    setIsAnswerWrong(true);
    if (isAnswerVerified && !isIncremented) {
      dispatch({ type: 'incrementWrongsCount' });
      setIsncremented(true);
    }
    if (isAnswerVerified) dispatch({ type: 'decrementLivesCount' });
  }

  useEffect(() => {
    if (isCurrentQuestion) {
      dispatch({ type: 'setState', payload: { prop: 'isAnswered', value: !!userAnswer } });
    }
  }, [userAnswer]);

  useEffect(() => {
    if (isCurrentQuestion) {
      dispatch({
        type: 'setState',
        payload: { prop: 'verifyAnswer', value: handleVerifyAnswer },
      });
    }
  }, [isAnswerVerified, userAnswer]);

  return (
    <C.Container>
      {isCurrentQuestion && (
        <>
          <QuestionStem animation={'fadeInDown'}>{stem}</QuestionStem>
          {code && (
            <QuestionCode height={getCodeHeight(code, 'open')}>
              <Editor value={code} />
            </QuestionCode>
          )}
          <C.Input
            value={userAnswer}
            onChangeText={setUserAnswer}
            isAnswerWrong={isAnswerVerified && isAnswerWrong}
          />
        </>
      )}
    </C.Container>
  );
}
