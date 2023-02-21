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
    containerRef.current.animateNextTransition();
    setIsOpen(isOpen => !isOpen);
    rotateButton();
  }

  useEffect(() => {
    if (userOutput) {
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
          disabled={isLocked}
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
            <C.Label>Input</C.Label>
            <C.Value>{input ? input.join(', ') : 'Sem entrada'}</C.Value>
          </C.Put>
          <C.Put>
            <C.Label>Seu resultado</C.Label>
            <C.Value from={'user'}>{userOutput ? userOutput : 'Sem resultado'}</C.Value>
          </C.Put>
          <C.Put>
            <C.Label>Resultado esperado</C.Label>
            <C.Value>{expectedOutput}</C.Value>
          </C.Put>
        </C.Body>
      )}
    </C.Container>
  );
}
