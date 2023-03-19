import { useEffect, useState } from 'react';
import { useLesson } from '../../hooks/useLesson';
import { useAuth } from '../../hooks/useAuth';

import { Theory } from '../../components/Theory';
import { Quiz } from '../../components/Quiz';
import { End } from '../../components/End';
import { TransitionScreenAnimation } from '../../components/TransitionScreenAnimation';
import * as C from './styles';


export function Lesson() {
  const { loggedUser } = useAuth();
  const [state, dispatch] = useLesson();
  const [isEndTrasition, setIsEndTransition] = useState(false);

  useEffect(() => {
    dispatch({ type: 'reorderQuestions' });
    const timer = setTimeout(() => setIsEndTransition(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <C.Container>
      {!isEndTrasition ? (
        <TransitionScreenAnimation />
      ) : (
        <>
          {state.currentStage === 'theory' && <Theory starId={loggedUser.starId} />}
          {state.currentStage === 'quiz' && <Quiz coins={loggedUser.coins} />}
          {state.currentStage === 'end' && <End starId={loggedUser.starId} />}
        </>
      )}
    </C.Container>
  );
}
