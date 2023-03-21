import { useState, useEffect, useRef } from 'react';
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
import { Slider } from '../Slider';
import { VerificationButton } from '../VerificationButton';

export function Quiz() {
  const [state, dispatch] = useLesson();
  const [forms, setForms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigation = useNavigation();
  const sliderRef = useRef(null);

  function LeaveLesson() {
    navigation.reset({
      routes: [{ name: 'DrawerRoutes' }],
    });
  }

  function getForm(question, index) {
    switch (question.type) {
      case 'selection':
        return {
          id: index,
          component: (
            <SelectOptionForm
              stem={question.stem}
              code={question.code}
              options={question.options}
              answer={question.answer}
              index={index}
            />
          ),
        };
      case 'open':
        return {
          id: index,
          component: <OpenForm stem={question.stem} answer={question.answer} index={index} />,
        };
      case 'checkbox':
        return {
          id: index,
          component: (
            <CheckboxForm
              stem={question.stem}
              options={question.options}
              correctOptions={question.correctOptions}
              index={index}
            />
          ),
        };
      case 'drag-and-drop-list':
        return {
          id: index,
          component: (
            <DragAndDropListForm
              stem={question.stem}
              items={question.items}
              correctItemsIdsSequence={question.correctItemsIdsSequence}
              index={index}
            />
          ),
        };
      case 'drag-and-drop-click':
        return {
          id: index,
          component: (
            <DragAndDropClickForm
              stem={question.stem}
              lines={question.lines}
              dropItems={question.dropItems}
              correctItemsIdsSequence={question.correctItemsIdsSequence}
              index={index}
            />
          ),
        };
      default:
        return;
    }
  }

  useEffect(() => {
    if (forms.length) return;
    setForms(state.questions.map(getForm));
  }, []);

  useEffect(() => {
    setTimeout(() => dispatch({ type: 'incrementSecondsCount' }), 1000);
  }, [state.currentStage, state.secondsCount]);

  useEffect(() => {
    if (state.livesCount === 0) {
      setIsModalOpen(true);
    }
  }, [state.livesCount]);

  useEffect(() => {
    if (!forms?.length) return;

    sliderRef?.current.scrollToIndex({
      index: state.currentQuestion,
      animated: true,
    });
  }, [state.currentQuestion]);

  return (
    <C.Container>
      <LessonHeader />

      {/* {currentQuestion.code && (
        <C.QuestionCode animation={'fadeInLeft'}>{currentQuestion.code}</C.QuestionCode>
      )} */}
      {/* {currentQuestion.type === 'selection' && (
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
      )} */}

      <Slider sliderRef={sliderRef} slides={forms} scrollEnabled={false} />

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
      <VerificationButton
        verifyAnswer={state.verifyAnswer}
        isAnswerWrong={state.isAnswerWrong}
        isAnswerVerified={state.isAnswerVerified}
        isAnswered={state.isAnswered}
      />
    </C.Container>
  );
}
