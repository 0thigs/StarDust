import * as C from './styles';
import { useLesson } from '../../hooks/useLesson';
import { Theory } from '../../components/Theory';
import { LessonHeader } from '../../components/LessonHeader';
import { Quiz } from '../../components/Quiz';
import { useEffect } from 'react';

export function Lesson() {
  const [state, dispatch] = useLesson();

  useEffect(() => {
    dispatch({ type: 'reorderQuestions' });
  }, []);

  return (
    <C.Container>
      {state.currentStage === 'theory' && <Theory />}
      {state.currentStage === 'quiz' && <Quiz />}
      {state.currentStage === 'end' && <End />}
    </C.Container>
  );
}
