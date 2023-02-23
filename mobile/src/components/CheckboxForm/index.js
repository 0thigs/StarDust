import { useEffect, useState } from 'react';
import { VerificationButton } from '../VerificationButton';
import { useLesson } from '../../hooks/useLesson';
import Animated, { RotateInDownRight, RotateOutDownRight } from 'react-native-reanimated';

import * as C from './styles';
import * as Icon from 'react-native-feather';
import theme from '../../global/styles/theme';
import { reorderItems } from '../../utils/reorderItems';

export function CheckboxForm({ options, correctOptions }) {
  const [, dispatch] = useLesson();
  const [reorderedOptions, setReorderedOptions] = useState([]);
  const [userOptions, setUserOptions] = useState([]);
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isAnswerVerified, setIsAnswerVerified] = useState(false);
  const [isIncremented, setIsncremented] = useState(false);
  const delay = 100;

  function resetAnswer() {
    if (isAnswerVerified && !!userOptions) {
      setUserOptions([]);
      setIsAnswerWrong(false);
    }
  }

  function handleVerifyAnswer() {
    setIsAnswerVerified(!isAnswerVerified);
    resetAnswer();
    
    const isAnswerCorrect = userOptions.every(userOption => correctOptions.includes(userOption));
    if (isAnswerCorrect) {
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

  function handleCheckOption(checkedOption) {
    if (userOptions.includes(checkedOption)) {
      setUserOptions(userOptions => userOptions.filter(option => option !== checkedOption));
      return;
    }
    setUserOptions(userOptions => [...userOptions, checkedOption]);
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
              onPress={() => handleCheckOption(option)}
              checkedOption={option}
              userOptions={userOptions}
              disabled={isAnswerVerified}
              isAnswerWrong={isAnswerVerified && isAnswerWrong}
              activeOpacity={0.7}
            >
              <C.Box checkedOption={option} userOptions={userOptions}>
                {userOptions.includes(option) && (
                  <Animated.View entering={RotateInDownRight} exiting={RotateOutDownRight}>
                    <Icon.Check color={theme.colors.blue_300} width={18} />
                  </Animated.View>
                )}
              </C.Box>
              <C.Label checkedOption={option} userOptions={userOptions}>
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
        isAnswered={!!userOptions}
      />
    </C.Container>
  );
}
