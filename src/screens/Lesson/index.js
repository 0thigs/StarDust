import { useEffect, useState } from 'react';
import * as C from './styles';
import { useLesson } from '../../hooks/useLesson';
import { Theory } from '../../components/Theory';
import { Quiz } from '../../components/Quiz';
import { End } from '../../components/End';
import { TransitionScreen } from '../../components/TransitionScreen';

export function Lesson() {
  const [state, dispatch] = useLesson();
  const [isEndTrasition, setIsEndTransition] = useState(false);

  useEffect(() => {
    dispatch({ type: 'reorderQuestions' });
    setTimeout(() => setIsEndTransition(true), 3000);
  }, []);

  return (
    <C.Container>
      {!isEndTrasition ? (
        <TransitionScreen />
      ) : (
        <C.Lesson>
          {state.currentStage === 'theory' && <Theory />}
          {state.currentStage === 'quiz' && <Quiz />}
          {state.currentStage === 'end' && <End />}
        </C.Lesson>
      )}
    </C.Container>
  );
}
