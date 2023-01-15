import { useEffect, useState } from 'react';
import * as C from './styles';
import { VerificationButton } from '../VerificationButton';
import { useLesson } from '../../hooks/useLesson';

export function SelectOptionForm() {
  const [state, dispatch] = useLesson();
  const [reorderedOptions, setReorderedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const options = state.questions[state.currentQuestion].options;
  const answer = state.questions[state.currentQuestion].answer;

  function reorderOptions() {
    const reorderedOptions = options.sort(() => {
      return Math.random() - 0.5;
    });
    setReorderedOptions(reorderedOptions);
  }

  function resetAnswer() {
    if (isVerified && !!selectedOption) {
      setSelectedOption('');
      setIsAnswerWrong(false);
    }
  }

  function handleVerifyAnswer() {
    setIsVerified(!isVerified);
    resetAnswer();

    if (selectedOption === answer) {
      setIsAnswerWrong(false);

      if (isVerified) {
        dispatch({ type: 'changeQuestion' });
      }
      return;
    }
    setIsAnswerWrong(true);
    if (isVerified) {
      dispatch({ type: 'incrementWrongsCount' });
      dispatch({ type: 'decrementLivesCount' });
    }
  }

  function handleSelectOption(index) {
    setSelectedOption(index);
  }

  useEffect(() => {
    const currentOptions = state.questions[state.currentQuestion].options;
    if (currentOptions) reorderOptions();
  }, [state.currentQuestion]);

  return (
    <C.Container>
      <C.Options>
        {reorderedOptions.map((option, index) => (
          <C.Option
            key={index}
            currentOption={option}
            onPress={() => handleSelectOption(option)}
            selectedOption={selectedOption}
            disabled={isVerified}
            isAnswerWrong={isVerified && isAnswerWrong}
          >
            <C.Label currentOption={option} selectedOption={selectedOption}>
              {option}
            </C.Label>
          </C.Option>
        ))}
      </C.Options>
      <VerificationButton
        verifyAnswer={handleVerifyAnswer}
        isAnswerWrong={isAnswerWrong}
        isVerified={isVerified}
        isAnswered={!!selectedOption}
      />
    </C.Container>
  );
}
