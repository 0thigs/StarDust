import { useEffect } from 'react';
import { useLesson } from '../../hooks/useLesson';
import { LessonHeader } from '../LessonHeader';
import { SelectOptionForm } from '../SelectOptionForm';
import { useNavigation } from '@react-navigation/native';
import * as C from './styles';
import { OpenForm } from '../OpenForm';
import { DragAndDropListForm } from '../DragAndDropListForm';
import { useState } from 'react';

export function Quiz() {
  const [state, dispatch] = useLesson();
  const [question, setQuestion] = useState(state.questions[state.currentQuestion]);

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => dispatch({ type: 'incrementSecondsCount' }), 1000);
  }, [state.currentStage, state.secondsCount]);

  useEffect(() => {
    if (state.wrongsCount === 5) {
      navigation.reset({
        routes: [{ name: 'DrawerRoutes' }],
      });
    }
  }, [state.wrongsCount]);

  useEffect(() => {
    setQuestion(state.questions[state.currentQuestion]);
  }, [state.currentQuestion]);

  return (
    <C.Container>
      <LessonHeader />
      <C.QuestionStem>{question.stem}</C.QuestionStem>
      {question.type === 'select-option' && (
        <SelectOptionForm />
      )}
      {question.type === 'open' && <OpenForm answer={question.answer} />}
      {question.type === 'drag-and-drop-list' && (
        <DragAndDropListForm
          items={question.items}
          correctItemsSequence={question.correctItemsSequence}
        />
      )}
    </C.Container>
  );
}
