import { useEffect, useRef, useState } from 'react';
import {
  interpolate,
  Transition,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Check, X, ArrowDown, Lock } from 'react-native-feather';
import theme from '../../global/styles/theme';
import * as C from './styles';
const iconSize = 20;

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export function TestCase({ number, input, expectedOutput, userOutput, isCorrect, isLocked }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const ButtonRotation = useSharedValue(true);

  const ButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(ButtonRotation.value, [true, false], [1, 180])}deg`,
        },
      ],
    };
  });

  function rotateButton() {
    ButtonRotation.value = withTiming(isOpen, { duration: 500 });
  }

  function handlePressButton() {
    if (isLocked) {
      return;
    }

    containerRef.current.animateNextTransition();
    setIsOpen(isOpen => !isOpen);
    rotateButton();
  }

  useEffect(() => {
    if (userOutput && !isLocked) {
      setIsOpen(true);
      rotateButton();
    }
  }, [userOutput]);

  return (
    <C.Container ref={containerRef} transition={transition} isLocked={isLocked}>
      <C.Header>
        <C.Icon>
          {isCorrect ? (
            <Check width={iconSize} height={iconSize} color={theme.colors.green_500} />
          ) : (
            <X width={iconSize} height={iconSize} color={theme.colors.red_700} />
          )}
        </C.Icon>
        <C.Heading isCorrect={isCorrect}>Teste de Caso #{number}</C.Heading>
        <C.Button
          onStartShouldSetResponder={handlePressButton}
          style={ButtonAnimatedStyle}
          activeOpacity={1}
        >
          {isLocked ? (
            <Lock width={iconSize} height={iconSize} color={theme.colors.gray_500} />
          ) : (
            <ArrowDown width={iconSize} height={iconSize} color={theme.colors.gray_500} />
          )}
        </C.Button>
      </C.Header>
      {isOpen && (
        <C.Body>
          <C.Put>
            <C.Label>Entrada</C.Label>
            <C.Value isInput={true}>
              {input.map(input => (
                <C.ValueText key={input}>{input ?? 'Sem entrada'}</C.ValueText>
              ))}
            </C.Value>
          </C.Put>
          <C.Put>
            <C.Label>Seu resultado</C.Label>
            <C.Value from={'user'}>
              {userOutput.length > 0 ? (
                userOutput.map(output => (
                  <C.ValueText key={output} from={'user'}>
                    {output === 0 ? 0 : output}
                  </C.ValueText>
                ))
              ) : (
                <C.ValueText from={'user'}>Sem resultado</C.ValueText>
              )}
            </C.Value>
          </C.Put>
          <C.Put>
            <C.Label>Resultado esperado</C.Label>
            <C.Value>
              {expectedOutput.map(output => (
                <C.ValueText key={output}>{output}</C.ValueText>
              ))}
            </C.Value>
          </C.Put>
        </C.Body>
      )}
    </C.Container>
  );
}
