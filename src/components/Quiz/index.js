import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useLesson } from '../../hooks/useLesson';

import { LessonHeader } from '../LessonHeader';
import { SelectOptionForm } from '../SelectOptionForm';
import { OpenForm } from '../OpenForm';
import { DragAndDropListForm } from '../DragAndDropListForm';
import { DragAndDropClickForm } from '../DragAndDropClickForm';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { CheckboxForm } from '../CheckboxForm';

import * as C from './styles';
import theme from '../../global/styles/theme';

export function Quiz({ coins }) {
  const [state, dispatch] = useLesson();
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigation = useNavigation();

  function LeaveLesson() {
    navigation.reset({
      routes: [{ name: 'DrawerRoutes' }],
    });
  }

  useEffect(() => {
    setTimeout(() => dispatch({ type: 'incrementSecondsCount' }), 1000);
  }, [state.currentStage, state.secondsCount]);

  useEffect(() => {
    if (state.wrongsCount === 5) {
      setIsModalOpen(true);
    }
  }, [state.wrongsCount]);

  useEffect(() => {
    setCurrentQuestion(state.questions[state.currentQuestion]);
  }, [state.currentQuestion]);

  return (
    <C.Container>
      <LessonHeader />
      <C.QuestionStem animation={'fadeInDown'}>{currentQuestion.stem}</C.QuestionStem>
      {currentQuestion.code && (
        <C.QuestionCode animation={'fadeInLeft'}>{currentQuestion.code}</C.QuestionCode>
      )}
      {currentQuestion.type === 'selection' && (
        <SelectOptionForm options={currentQuestion.options} answer={currentQuestion.answer} />
      )}
      {currentQuestion.type === 'open' && <OpenForm answer={currentQuestion.answer} />}
      {currentQuestion.type === 'checkbox' && (
        <CheckboxForm
          options={currentQuestion.options}
          correctOptions={currentQuestion.correctOptions}
        />
      )}
      {currentQuestion.type === 'drag-and-drop-list' && (
        <DragAndDropListForm
          items={currentQuestion.items}
          correctItemsIdsSequence={currentQuestion.correctItemsIdsSequence}
        />
      )}
      {currentQuestion.type === 'drag-and-drop-click' && (
        <DragAndDropClickForm
          lines={currentQuestion.lines}
          dropItems={currentQuestion.dropItems}
          correctItemsIdsSequence={currentQuestion.correctItemsIdsSequence}
        />
      )}

      <Modal
        type={'crying'}
        title={'Puxa, parece que você não tem mais vidas'}
        isOpen={isModalOpen}
        body={<C.Text>Mais sorte da próxima vez</C.Text>}
        footer={
          <C.Buttons>
            {/* {!coins > 500 && (
              <Button
                title={'Comprar 5 vidas 💖'}
                background={theme.colors.green_500}
                color={theme.colors.black}
              />
            )} */}
            <Button
              title={'Sair'}
              background={theme.colors.red_700}
              color={theme.colors.white}
              onPress={LeaveLesson}
            />
          </C.Buttons>
        }
      />
    </C.Container>
  );
}
