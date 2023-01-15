import React from 'react';
import { Button } from '../Button';
import * as C from './styles';

import Check from '../../assets/LessonAssets/correct-answer-icon.svg';
import X from '../../assets/LessonAssets/incorrect-answer-icon.svg';

export function VerificationButton({ verifyAnswer, isAnswerWrong, isVerified, isAnswered }) {
  return (
    <C.Container isAnswerWrong={isVerified && isAnswerWrong}>
      {isVerified && (
        <C.Feedback>
          {isAnswerWrong ? <X /> : <Check />}
          <C.Message animation={'bounceInUp'} isAnswerWrong={isAnswerWrong}>
            {isAnswerWrong ? 'Oops, tente denovo!' : 'Correto, parabéns!'}
          </C.Message>
        </C.Feedback>
      )}
      <Button
        title={
          isVerified && isAnswerWrong ? 'Tentar novamente' : isVerified ? 'Continuar' : 'Verificar'
        }
        onPress={verifyAnswer}
        color={isVerified && isAnswerWrong ? 'red' : 'green'}
        isDisabled={!isAnswered}
      />
    </C.Container>
  );
}
