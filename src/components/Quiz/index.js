import { usePhase } from '../../hooks/usePhase';
import * as C from './styles';

export function Quiz() {
  const [state, dispatch] = usePhase();
  const question = state.questions[state.currentQuestion];

  console.log({ question });

  return (
    <C.Container>
      <C.QuestionStem>{question.stem}</C.QuestionStem>
      {question.type === 'select-option' ? (
        <C.OptionsList
          data={question.options}
          keyExtractor={option => option.id}
          renderItem={({ item }) => <C.Option>{item.label}</C.Option>}
        />
      ) : question.type === 'open' ? (
        <C.Input />
      ) : question.type === 'drag-and-drop-list' ? (
        <C.ItemsList
          data={question.items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <C.Item>{item.label}</C.Item>}
        />
      ) : null}
    </C.Container>
  );
}
