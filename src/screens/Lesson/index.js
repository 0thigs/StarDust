import { useEffect, useState } from 'react';
import * as C from './styles';
import { useLesson } from '../../hooks/useLesson';
import { Theory } from '../../components/Theory';
import { Quiz } from '../../components/Quiz';
import { End } from '../../components/End';
import { TransitionScreenAnimation } from '../../components/TransitionScreenAnimation';
import { useAuth } from '../../hooks/useAuth';

export function Lesson() {
  const { user } = useAuth();
  const [state, dispatch] = useLesson();
  const [isEndTrasition, setIsEndTransition] = useState(false);

  useEffect(() => {
    dispatch({ type: 'reorderQuestions' });
    setTimeout(() => setIsEndTransition(true), 3000);
  }, []);

  return (
    <C.Container>
      {!isEndTrasition ? (
        <TransitionScreenAnimation screen={'home'} />
      ) : (
        <>
          {state.currentStage === 'quiz' && <Quiz coins={user.coins} />}
          {state.currentStage === 'theory' && <Theory starId={user.starId} />}
          {state.currentStage === 'end' && <End starId={user.starId} />}
        </>
      )}
    </C.Container>
  );
}
