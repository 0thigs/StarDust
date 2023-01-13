import { useEffect } from 'react';
import { useLesson } from '../../hooks/useLesson';
import { LessonHeader } from '../LessonHeader';
import { SelectOptionForm } from '../SelectOptionForm';
import { useNavigation } from '@react-navigation/native';
import * as C from './styles';
import { OpenForm } from '../OpenForm';

export function Quiz() {
  const [state, dispatch] = useLesson();
  const question = state.questions[state.currentQuestion];
  const wrongsCount = state.wrongsCount;

  const navigation = useNavigation();

  useEffect(() => {
    console.log(wrongsCount);
    if (wrongsCount === 5) {
      navigation.reset({
        routes: [{ name: 'DrawerRoutes' }],
      });
    }
  }, [wrongsCount]);

  return (
    <C.Container>
      <LessonHeader />
      <C.QuestionStem>{question.stem}</C.QuestionStem>
      <OpenForm answer={question.answer} />
      {/* <SelectOptionForm options={question.options} answer={question.answer} /> */}

      {/* {question.type === 'select-option' ? (
        <SelectOptionForm options={question.options} />
      ) : question.type === 'open' ? (
        <C.Input />
      ) : question.type === 'drag-and-drop-list' ? (
        <C.ItemsList
          data={question.items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <C.Item>{item.label}</C.Item>}
        />
      ) : null} */}
    </C.Container>
  );
}
