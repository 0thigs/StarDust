import { useState, useEffect } from 'react';
import * as C from './styles';
import { useLesson } from '../../hooks/useLesson';
import { LessonHeader } from '../LessonHeader';
import { SelectOptionForm } from '../SelectOptionForm';
import { useNavigation } from '@react-navigation/native';
import { OpenForm } from '../OpenForm';
import { DragAndDropListForm } from '../DragAndDropListForm';
import { Modal } from '../Modal';
import { Button } from '../Button';
import theme from '../../global/styles/theme';

export function Quiz({ coins }) {
  const [state, dispatch] = useLesson();
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const navigation = useNavigation();

  function buyLives() {
   
  }

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
      setShowModal(true);
      LeaveLesson();
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
      {currentQuestion.type === 'open' && <OpenForm answer={currentQuestion.answer} />}
      {currentQuestion.type === 'drag-and-drop-list' && (
        <DragAndDropListForm
          items={currentQuestion.items}
          correctItemsSequence={currentQuestion.correctItemsSequence}
        />
      )}
      <Modal
        type={'crying'}
        title={'Puxa, parece que você não tem mais vidas'}
        show={showModal}
        body={
          <C.Text>
            {coins > 500
              ? `Você pode escolher de duas uma, restaurar todas suas vidas com 500 de poeira estelar ou voltar para tela principal e esperar 1 hora para restaurar cada vida (sua poeira estelar disponível: ${coins})`
              : 'Não se precupe, pois cada é restaurada a cada 1 hora.'}
          </C.Text>
        }
        footer={
          <C.Buttons>
            {!coins > 500 && (
              <Button
                title={'Comprar 5 vidas 💖'}
                background={theme.colors.green_500}
                color={theme.colors.black}
              />
            )}
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
