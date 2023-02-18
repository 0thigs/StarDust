import { useEffect, useRef } from 'react';
import { Button } from '../Button';
import * as C from './styles';

import Check from '../../assets/LessonAssets/correct-answer-icon.svg';
import X from '../../assets/LessonAssets/incorrect-answer-icon.svg';
import theme from '../../global/styles/theme';
import { Sound } from '../Sound';

const sounds = {
  success: require('../../assets/LessonAssets/success-sound.wav'),
  fail: require('../../assets/LessonAssets/fail-sound.wav'),
};

export function VerificationButton({ verifyAnswer, isAnswerWrong, isAnswerVerified, isAnswered }) {
  const soundRef = useRef();

  useEffect(() => {
    if (isAnswerVerified) {
      soundRef.current.playSound();
    }
  }, [isAnswerVerified]);

  return (
    <C.Container isAnswerWrong={isAnswerVerified && isAnswerWrong}>
      {isAnswerVerified && (
        <C.Feedback>
          {isAnswerWrong ? <X /> : <Check />}
          <C.Message animation={'bounceInUp'} isAnswerWrong={isAnswerWrong}>
            {isAnswerWrong ? 'Oops, tente denovo!' : 'Correto, parabéns!'}
          </C.Message>
        </C.Feedback>
      )}
      <Button
        title={
          isAnswerVerified && isAnswerWrong
            ? 'Tentar novamente'
            : isAnswerVerified
            ? 'Continuar'
            : 'Verificar'
        }
        onPress={verifyAnswer}
        background={
          isAnswerVerified && isAnswerWrong ? theme.colors.red_700 : theme.colors.green_500
        }
        color={isAnswerVerified && isAnswerWrong ? theme.colors.white : theme.colors.black}
        isDisabled={!isAnswered}
      />
      <Sound ref={soundRef} soundFile={sounds[isAnswerWrong ? 'fail' : 'success']} />
    </C.Container>
  );
}
