import { useState, useEffect } from 'react';
import * as C from './styles';
import { useLesson } from '../../hooks/useLesson';
import { LessonHeader } from '../LessonHeader';
import { SelectOptionForm } from '../SelectOptionForm';
import { useNavigation } from '@react-navigation/native';
import { OpenForm } from '../OpenForm';
import { DragAndDropListForm } from '../DragAndDropListForm';

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
      <C.QuestionStem animation={'fadeInDown'}>{question.stem}</C.QuestionStem>
      {question.type === 'select-option' && <SelectOptionForm />}
      {question.type === 'open' && <OpenForm />}
      {question.type === 'drag-and-drop-list' && <DragAndDropListForm />}
    </C.Container>
  );
}
