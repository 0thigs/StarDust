import { useEffect, useState } from 'react';
import { useLesson } from '../../hooks/useLesson';
import { QuestionCode, QuestionTitle } from '../Quiz/styles';
import { Editor } from '../Editor';
import * as C from './styles';
import { View } from 'react-native';
import { compareSenquences } from '../../utils/compareSenquences';
import { Input } from './Input';

export function OpenForm({ title, answers, lines, code, index }) {
  const [{ isAnswerVerified, isAnswerWrong, currentQuestion }, dispatch] = useLesson();
  const [isIncremented, setIsncremented] = useState(false);
  const isCurrentQuestion = index === currentQuestion;

 
  
  const [userAnswers, setUserAnswers] = useState(
      Array.from({ length: answers.length }).fill('')
      )

  function setIsAnswerVerified(value) {
    dispatch({ type: 'setState', payload: { prop: 'isAnswerVerified', value } });
  }

  function setIsAnswerWrong(value) {
    dispatch({ type: 'setState', payload: { prop: 'isAnswerWrong', value } });
  }

  function resetAnswer() {
    if (isAnswerVerified && userAnswers.length) {
      setIsAnswerWrong(false);
    }
  }

  function handleVerifyAnswer() {
    setIsAnswerVerified(!isAnswerVerified);
    resetAnswer();

    const isUserAnswerCorrect = compareSenquences(userAnswers, answers)

    if (isUserAnswerCorrect) {
      setIsAnswerWrong(false);

      if (isAnswerVerified) dispatch({ type: 'changeQuestion' });
      return;
    }

    setIsAnswerWrong(true);
    if (isAnswerVerified && !isIncremented) {
      dispatch({ type: 'incrementWrongsCount' });
      setIsncremented(true);
    }
    if (isAnswerVerified) dispatch({ type: 'decrementLivesCount' });
  }

  function handleInputChange(value, index) {
    userAnswers[index] = value

    setUserAnswers([...userAnswers.filter(answer => answer !== "")])
  }

  useEffect(() => {
    if (isCurrentQuestion) {
      dispatch({ type: 'setState', payload: { prop: 'isAnswered', value: userAnswers.length === answers.length } });
    }
  }, [userAnswers]);

  useEffect(() => {
    if (isCurrentQuestion) {
      dispatch({
        type: 'setState',
        payload: { prop: 'verifyAnswer', value: handleVerifyAnswer },
      });
    }
  }, [isAnswerVerified, userAnswers]);

  return (
    <C.Container>
      {isCurrentQuestion && (
        <>
          <QuestionTitle animation={'fadeInDown'}>{title}</QuestionTitle>
          {code && (
            <QuestionCode
              height={code.split('\n').length * (code.split('\n').length > 10 ? 22 : 24)}
            >
              <Editor value={code} />
            </QuestionCode>
          )}
          {lines.map(line => <C.Line key={line.id}>
            {
                <C.Line key={line.id}>
                {
                    line.texts.map((text, index) => {
                        let inputIndex = 0
    
                        if (text.includes('input')) {
                          inputIndex = Number(text.slice(-1)) - 1
                        }
    
                        return (
                            <View key={`${index}-${line.id}`}>
                            {!text.includes('input') ? (
                                <C.Text className="flex gap-2 text-gray-100">{text}</C.Text>
                            ) : (
                                <Input
                                    value={userAnswers[inputIndex]}
                                    autoCapitalize="none"
                                    onChangeText={(text) =>
                                        handleInputChange(text, inputIndex)
                                    }
                                    answer={answers[inputIndex]}
                                    autoFocus={false}
                                />
                            )}
                            </View>
                          )
                    })
                }
              </C.Line>
            }
          </C.Line>) }
        </>
      )}
    </C.Container>
  );
}
