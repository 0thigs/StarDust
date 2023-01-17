import { useEffect, useState } from 'react';
import * as C from './styles';
import { VerificationButton } from '../VerificationButton';
import { useLesson } from '../../hooks/useLesson';

export function SelectOptionForm({options, answer}) {
  const [, dispatch] = useLesson();
  const [reorderedOptions, setReorderedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isIncremented, setIsncremented] = useState(false);
  const delay = 100;

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
    if (isVerified && !isIncremented) {
      dispatch({ type: 'incrementWrongsCount' });
      setIsncremented(true);
    }
    if (isVerified) dispatch({ type: 'decrementLivesCount' });
  }

  function handleSelectOption(index) {
    setSelectedOption(index)
  }

  useEffect(() => {
   reorderOptions();
  }, [options]);

  return (
    <C.Container>
      <C.Options>
        {reorderedOptions.map((option, index) => (
          <C.OptionContainer key={index} animation={'fadeInLeft'} delay={delay * (index + 1)}>
            <C.Option
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
          </C.OptionContainer>
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