import { useEffect, useState } from 'react';
import * as C from './styles';
import { VerificationButton } from '../VerificationButton';

export function SelectOptionForm({ options, answer }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  function reorderOptions() {
    options = options.sort(() => {
      return Math.random() - 0.5;
    });
  }

  function resetAnswer() {
    if (isVerified && !!selectedOption) {
      setSelectedOption('');
    }
  }

  function handleVeriryAnswer() {
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
    dispatch({ type: 'setWrongsCount' });
  }

  function handleSelectOption(index) {
    setSelectedOption(index);
  }

  useEffect(() => {
    reorderOptions();
  }, []);

  return (
    <C.Container>
      <C.Options>
        {options.map((option, index) => (
          <C.Option
            key={index}
            currentOption={option}
            onPress={() => handleSelectOption(option)}
            selectedOption={selectedOption}
            disabled={isVerified}
          >
            <C.Label currentOption={option} selectedOption={selectedOption}>
              {option}
            </C.Label>
          </C.Option>
        ))}
      </C.Options>
      <VerificationButton
        verifyAnswer={handleVeriryAnswer}
        isAnswerWrong={isAnswerWrong}
        isVerified={isVerified}
        isAnswered={!!selectedOption}
      />
    </C.Container>
  );
}
