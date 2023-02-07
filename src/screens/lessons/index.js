import { useEffect, useState } from 'react';
import * as C from './styles';
import { useLesson } from '../../hooks/useLesson';
import { Theory } from '../../components/Theory';
import { Quiz } from '../../components/Quiz';
import { End } from '../../components/End';
import { TransitionScreenAnimation } from '../../components/TransitionScreenAnimation';
import { useAuth } from '../../hooks/useAuth';

export function Lesson({ starId }) {
  const { user } = useAuth();
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
          {state.currentStage === 'theory' && <Theory starId={starId} />}
          {state.currentStage === 'quiz' && <Quiz coins={user.coins} />}
          {state.currentStage === 'end' && <End starId={starId} />}
        </>
      )}
    </C.Container>
  );
}
