import { useEffect, useState } from 'react';
import { useLesson } from '../../hooks/useLesson';
import Animated, { RotateInDownRight, RotateOutDownRight } from 'react-native-reanimated';

import { reorderItems } from '../../utils/reorderItems';
import { QuestionCode, QuestionStem } from '../Quiz/styles';
import { Editor } from '../Editor';

import theme from '../../global/styles/theme';
import * as C from './styles';
import * as Icon from 'react-native-feather';
const delay = 500;

export function CheckboxForm({ stem, options, correctOptions, code, index }) {
  const [{ isAnswerVerified, isAnswerWrong, currentQuestion }, dispatch] = useLesson();
  const [reorderedOptions, setReorderedOptions] = useState([]);
  const [userOptions, setUserOptions] = useState([]);
  const [isIncremented, setIsncremented] = useState(false);
  const isCurrentQuestion = index === currentQuestion;

  function setIsAnswerVerified(value) {
    dispatch({ type: 'setState', payload: { prop: 'isAnswerVerified', value } });
  }

  function setIsAnswerWrong(value) {
    dispatch({ type: 'setState', payload: { prop: 'isAnswerWrong', value } });
  }

  function resetAnswer() {
    if (isAnswerVerified && !!userOptions) {
      setUserOptions([]);
      setIsAnswerWrong(false);
    }
  }

  function isUserAnswerCorrect() {
    return (
      userOptions.length === correctOptions.length &&
      userOptions.every(userOption => correctOptions.includes(userOption))
    );
  }

  function handleVerifyAnswer() {
    setIsAnswerVerified(!isAnswerVerified);
    resetAnswer();

    if (isUserAnswerCorrect()) {
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
    if (reorderedOptions.length) return;
    reorderItems(options, setReorderedOptions);
  }, [options]);

  useEffect(() => {
    if (isCurrentQuestion) {
      dispatch({ type: 'setState', payload: { prop: 'isAnswered', value: !!userOptions.length } });
    }
  }, [userOptions]);

  useEffect(() => {
    if (isCurrentQuestion) {
      dispatch({
        type: 'setState',
        payload: { prop: 'verifyAnswer', value: handleVerifyAnswer },
      });
    }
  }, [isAnswerVerified, userOptions]);

  return (
    <C.Container>
      <QuestionStem animation={'fadeInDown'}>{stem}</QuestionStem>
      {code && (
        <QuestionCode height={code.split('\n').length * (code.split('\n').length > 10 ? 22 : 26)}>
          <Editor value={code} />
        </QuestionCode>
      )}
      <C.Options>
        {reorderedOptions.map((option, index) => (
          <C.OptionContainer key={index} animation={'fadeInLeft'} delay={delay * (index / 2 + 1)}>
            <C.Option
              onPress={() => handleCheckOption(option)}
              disabled={isAnswerVerified}
              isAnswerWrong={isAnswerVerified && isAnswerWrong}
              isAnswerCorrect={isAnswerVerified && isUserAnswerCorrect()}
              isSelected={userOptions.includes(option)}
              activeOpacity={0.7}
            >
              <C.Box
                isAnswerWrong={isAnswerVerified && isAnswerWrong}
                isAnswerCorrect={isAnswerVerified && isUserAnswerCorrect()}
                isSelected={userOptions.includes(option)}
              >
                {userOptions.includes(option) && (
                  <Animated.View entering={RotateInDownRight} exiting={RotateOutDownRight}>
                    <Icon.Check
                      color={
                        theme.colors[
                          isAnswerVerified && isAnswerWrong
                            ? 'red_300'
                            : isAnswerVerified && isUserAnswerCorrect()
                            ? 'green_300'
                            : 'blue_300'
                        ]
                      }
                      width={18}
                    />
                  </Animated.View>
                )}
              </C.Box>
              <C.Label
                isAnswerWrong={isAnswerVerified && isAnswerWrong}
                isAnswerCorrect={isAnswerVerified && isUserAnswerCorrect()}
                isSelected={userOptions.includes(option)}
              >
                {option}
              </C.Label>
            </C.Option>
          </C.OptionContainer>
        ))}
      </C.Options>
    </C.Container>
  );
}
