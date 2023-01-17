import { useState, useEffect } from 'react';
import * as C from './styles';
import { useLesson } from '../../hooks/useLesson';
import { LessonHeader } from '../LessonHeader';
import { SelectOptionForm } from '../SelectOptionForm';
import { useNavigation } from '@react-navigation/native';
import { OpenForm } from '../OpenForm';
import { DragAndDropListForm } from '../DragAndDropListForm';
import { questions } from '../../utils/questions';

export function Quiz() {
  const [state, dispatch] = useLesson();
  const [currentQuestion, setCurrentQuestion] = useState([]);
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
    setCurrentQuestion(state.questions[state.currentQuestion]);
  }, [state.currentQuestion]);

  return (
    <C.Container>
      <LessonHeader />
      <C.QuestionStem animation={'fadeInDown'}>{currentQuestion.stem}</C.QuestionStem>
      {currentQuestion.type === 'select-option' && (
        <SelectOptionForm options={currentQuestion.options} answer={currentQuestion.answer} />
      )}
      {currentQuestion.type === 'open' && (
        <OpenForm answer={currentQuestion.answer} />
      ) }
      {currentQuestion.type === 'drag-and-drop-list' && (
        <DragAndDropListForm
          items={currentQuestion.items}
          correctItemsSequence={currentQuestion.correctItemsSequence}
        />
      )}
    </C.Container>
  );
}