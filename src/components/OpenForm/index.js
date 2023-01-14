import { useState } from 'react';
import * as C from './styles';
import { VerificationButton } from '../VerificationButton';
import { useLesson } from '../../hooks/useLesson';

export function OpenForm({ answer }) {
  const [, dispatch] = useLesson();

  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

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
    dispatch({ type: 'setWrongsCount' });
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