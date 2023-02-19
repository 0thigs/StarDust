import { useRef, useState } from 'react';
import {
  interpolate,
  Transition,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Check, X, ArrowDown } from 'react-native-feather';
import theme from '../../global/styles/theme';
import * as C from './styles';
const iconSize = 16;
const arrowSize = 20;

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={500} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={500} />
  </Transition.Together>
);

export function TestCase({ number, input, expectedOutput }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const ButtonRotation = useSharedValue(false);

  console.log(input)

  const ButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${interpolate(ButtonRotation.value, [false, true], [1, 180])}deg` }],
    };
  });

  function handlePressButton() {
    containerRef.current.animateNextTransition();
    setIsOpen(!isOpen);
    ButtonRotation.value = withTiming(isOpen, { duration: 500 });
  }

  return (
    <C.Container ref={containerRef} transition={transition}>
      <C.Header>
        <C.Icon>
          <Check width={iconSize} height={iconSize} color={theme.colors.green_500} />
        </C.Icon>
        <C.Heading>Teste de Caso #{number}</C.Heading>
        <C.Button onStartShouldSetResponder={handlePressButton} style={ButtonAnimatedStyle} activeOpacity={1}>
          <ArrowDown
            width={arrowSize}
            height={arrowSize}
            color={theme.colors.gray_500}
          />
        </C.Button>
      </C.Header>
      {isOpen && (
        <C.Body>
          <C.Put>
            <C.Label>Input</C.Label>
            <C.Value>{input.join(', ')}</C.Value>
          </C.Put>
          <C.Put>
            <C.Label>Seu resultado</C.Label>
            <C.Value from={'user'}>2</C.Value>
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
