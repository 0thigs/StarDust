import { useEffect, useState } from 'react';
import * as C from './styles';
import { useLesson } from '../../hooks/useLesson';
import { Theory } from '../../components/Theory';
import { Quiz } from '../../components/Quiz';
import { End } from '../../components/End';
import { TransitionScreenAnimation } from '../../components/TransitionScreenAnimation';
import { useRoute } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';

export function Lesson() {
  const { user } = useAuth();
  const route = useRoute();
  const [state, dispatch] = useLesson();
  const [isEndTrasition, setIsEndTransition] = useState(false);

  useEffect(() => {
    dispatch({ type: 'reorderQuestions' });
    setTimeout(() => setIsEndTransition(true), 3000);
  }, []);

  return (
    <C.Container>
      {!isEndTrasition ? (
        <TransitionScreenAnimation />
      ) : (
        <>
          {state.currentStage === 'theory' && <Theory starId={user.starId} />}
          {state.currentStage === 'quiz' && <Quiz />}
          {state.currentStage === 'end' && <End starId={user.starId} />}
        </>
      )}
    </C.Container>
  );
}
