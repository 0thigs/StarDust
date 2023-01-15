import { useState } from 'react';
import * as C from './styles';
import { VerificationButton } from '../VerificationButton';
import { useLesson } from '../../hooks/useLesson';

export function OpenForm() {
  const [state, dispatch] = useLesson();
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isIncremented, setIsncremented] = useState(false);
  const answer = state.questions[state.currentQuestion].answer;

  function resetAnswer() {
    if (isVerified && userAnswer) {
      setUserAnswer('');
      setIsAnswerWrong(false);
    }
  }

  function handleVerifyAnswer() {
    setIsVerified(!isVerified);
    resetAnswer();

    if (userAnswer.trim().toLowerCase() === answer) {
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

  return (
    <C.Container>
      <C.Input
        autoFocus
        value={userAnswer}
        onChangeText={setUserAnswer}
        isAnswerWrong={isVerified && isAnswerWrong}
      />
      <VerificationButton
        verifyAnswer={handleVerifyAnswer}
        isVerified={isVerified}
        isAnswerWrong={isAnswerWrong}
        isAnswered={userAnswer}
      />
    </C.Container>
  );
}
