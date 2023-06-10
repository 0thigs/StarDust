import { useEffect, useState } from 'react';
import { useLesson } from '../../hooks/useLesson';
import { reorderItems } from '../../utils/reorderItems';
import { Editor } from '../Editor';
import { QuestionStem, QuestionCode } from '../Quiz/styles';
import * as C from './styles';
const delay = 500;

export function SelectOptionForm({ stem, code, options, answer, index }) {
  const [{ isAnswerVerified, isAnswerWrong, currentQuestion }, dispatch] = useLesson();
  const [reorderedOptions, setReorderedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [isIncremented, setIsncremented] = useState(false);
  const isCurrentQuestion = index === currentQuestion;

  function setIsAnswerVerified(value) {
    dispatch({ type: 'setState', payload: { prop: 'isAnswerVerified', value } });
  }

  function setIsAnswerWrong(value) {
    dispatch({ type: 'setState', payload: { prop: 'isAnswerWrong', value } });
  }

  function resetAnswer() {
    if (isAnswerVerified && !!selectedOption) {
      setSelectedOption('');
      setIsAnswerWrong(false);
    }
  }

  function handleVerifyAnswer() {
    setIsAnswerVerified(!isAnswerVerified);
    resetAnswer();

    if (selectedOption === answer) {
      setIsAnswerWrong(false);

      if (isAnswerVerified) {
        dispatch({ type: 'changeQuestion' });
      }
      return;
    }
    setIsAnswerWrong(true);
    if (isAnswerVerified && !isIncremented) {
      dispatch({ type: 'incrementWrongsCount' });
      setIsncremented(true);
    }

    if (isAnswerVerified) dispatch({ type: 'decrementLivesCount' });
  }

  function handleSelectOption(option) {
    setSelectedOption(option);
  }

  useEffect(() => {
    if (reorderedOptions.length) return;
    reorderItems(options, setReorderedOptions);
  }, []);

  useEffect(() => {
    if (isCurrentQuestion) {
      dispatch({ type: 'setState', payload: { prop: 'isAnswered', value: !!selectedOption } });
    }
  }, [selectedOption]);

  useEffect(() => {
    if (isCurrentQuestion) {
      dispatch({
        type: 'setState',
        payload: { prop: 'verifyAnswer', value: handleVerifyAnswer },
      });
    }
  }, [isAnswerVerified, selectedOption]);

  return (
    <C.Container>
      {isCurrentQuestion && (
        <>
          <QuestionStem animation={'fadeInDown'}>{stem}</QuestionStem>
          {code && (
            <QuestionCode
              height={code.split('\n').length * (code.split('\n').length > 10 ? 20 : 27)}
            >
              <Editor value={code} />
            </QuestionCode>
          )}
          <C.Options>
            {reorderedOptions.map((option, index) => (
              <C.OptionContainer
                key={index}
                animation={'fadeInLeft'}
                delay={delay * (index / 2 + 1)}
              >
                <C.Option
                  onPress={() => handleSelectOption(option)}
                  disabled={isAnswerVerified}
                  isSelected={selectedOption === option}
                  isAnswerWrong={isAnswerVerified && isAnswerWrong}
                  isCorrectAnswer={isAnswerVerified && !isAnswerWrong && option === answer}
                  activeOpacity={0.7}
                >
                  <C.Label
                    currentOption={option}
                    isSelected={selectedOption === option}
                    isAnswerWrong={isAnswerVerified && isAnswerWrong}
                    isCorrectAnswer={isAnswerVerified && !isAnswerWrong && option === answer}
                  >
                    {option}
                  </C.Label>
                </C.Option>
              </C.OptionContainer>
            ))}
          </C.Options>
        </>
      )}
    </C.Container>
  );
}
