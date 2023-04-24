import { useEffect, useRef } from 'react';
import { Button } from '../Button';
import { Sound } from '../Sound';
import * as C from './styles';

import Check from '../../assets/LessonAssets/correct-answer-icon.svg';
import X from '../../assets/LessonAssets/incorrect-answer-icon.svg';
import theme from '../../global/styles/theme';

const sounds = {
  success: require('../../assets/sounds/success-sound.wav'),
  fail: require('../../assets/sounds/fail-sound.wav'),
};

export function VerificationButton({ verifyAnswer, isAnswerWrong, isAnswerVerified, isAnswered, showComments, isChallenge }) {
  const soundRef = useRef();

  useEffect(() => {
    if (isAnswerVerified) {
      soundRef.current.play();
    }
  }, [isAnswerVerified]);

  return (
    <C.Container isAnswerWrong={isAnswerVerified && isAnswerWrong}>
      {isAnswerVerified && (
        <C.Feedback>
          {!isAnswerWrong && isChallenge && (
            <C.CommentsButton onPress={showComments}>
              <C.Title>Mostrar comentários</C.Title>
            </C.CommentsButton>
          )}
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
