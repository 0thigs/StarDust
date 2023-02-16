import { useEffect, useState } from 'react';
import { useLesson } from '../../hooks/useLesson';
import { VerificationButton } from '../VerificationButton';
import { reorderItems } from '../../utils/reorderItems';
import * as C from './styles';

export function SelectOptionForm({ options, answer }) {
  const [, dispatch] = useLesson();
  const [reorderedOptions, setReorderedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isAnswerVerified, setIsAnswerVerified] = useState(false);
  const [isIncremented, setIsncremented] = useState(false);
  const delay = 100;

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
    reorderItems(options, setReorderedOptions);
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
              disabled={isAnswerVerified}
              isAnswerWrong={isAnswerVerified && isAnswerWrong}
              activeOpacity={0.7}
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
        isAnswerVerified={isAnswerVerified}
        isAnswered={!!selectedOption}
      />
    </C.Container>
  );
}
