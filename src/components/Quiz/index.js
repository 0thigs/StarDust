import { useEffect } from 'react';
import { useLesson } from '../../hooks/useLesson';
import { LessonHeader } from '../LessonHeader';
import { SelectOptionForm } from '../SelectOptionForm';
import { useNavigation } from '@react-navigation/native';
import * as C from './styles';
import { OpenForm } from '../OpenForm';
import { DragAndDropListForm } from '../DragAndDropListForm';

export function Quiz() {
  const [state, dispatch] = useLesson();
  const question = state.questions[state.currentQuestion];
  const wrongsCount = state.wrongsCount;

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(dispatch({ type: 'incrementSecondsCount', payload: state.secondsCount + 1 }), 1000);
    console.log(state.secondsCount);
  }, [state.secondsCount]);

  useEffect(() => {
    // if (wrongsCount === 5) {
    //   navigation.reset({
    //     routes: [{ name: 'DrawerRoutes' }],
    //   });
    // }
  }, [wrongsCount]);

  return (
    <C.Container>
      <LessonHeader />
      <C.QuestionStem>{question.stem}</C.QuestionStem>
      {question.type === 'select-option' && (
        <SelectOptionForm options={question.options} answer={question.answer} />
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
