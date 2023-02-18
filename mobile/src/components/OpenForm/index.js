import { useState } from 'react';
import * as C from './styles';
import { VerificationButton } from '../VerificationButton';
import { useLesson } from '../../hooks/useLesson';

export function OpenForm({ answer }) {
  const [, dispatch] = useLesson();
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isAnswerVerified, setIsAnswerVerified] = useState(false);
  const [isIncremented, setIsncremented] = useState(false);

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

  return (
    <C.Container>
      <C.Input
        autoFocus
        value={userAnswer}
        onChangeText={setUserAnswer}
        isAnswerWrong={isAnswerVerified && isAnswerWrong}
      />
      <VerificationButton
        verifyAnswer={handleVerifyAnswer}
        isAnswerVerified={isAnswerVerified}
        isAnswerWrong={isAnswerWrong}
        isAnswered={userAnswer}
      />
    </C.Container>
  );
}
