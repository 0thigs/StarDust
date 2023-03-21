import { Dimensions } from 'react-native';
import { Svg, Line } from 'react-native-svg';
import theme from '../../global/styles/theme';
import Modal from 'react-native-modal';
import * as C from './styles';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { GestureDetector, Gesture, GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

export function RangeInput({ isVisible, setIsVisible }) {
  const posX = useSharedValue(0);

  const handleGesture = Gesture.Pan().onUpdate(event => {
    console.log(event.translationX);
    posX.value = event.translationX;
  });

  const positionStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: posX.value }],
    };
  });

  return (
    <Modal isVisible={isVisible} animationIn={'slideInUp'} animationOut={'bounceOut'}>
      <GestureHandlerRootView>
        <C.Content>
          <C.Heading>Font Size</C.Heading>
          <C.Controls>
            <C.Button>
              <C.Title>A</C.Title>
            </C.Button>

            <C.Range>
              <C.Label>Padrão</C.Label>
              <C.Track style={positionStyle}>
                <PanGestureHandler gesture={handleGesture}>
                  <Animated.View style={{ flexDirection: 'row' }}>
                    <C.Thumb />
                    <C.Knob />
                  </Animated.View>
                </PanGestureHandler>
              </C.Track>
            </C.Range>

            <C.Button>
              <C.Title>A</C.Title>
            </C.Button>
          </C.Controls>

          <C.Button onPress={() => setIsVisible(false)}>
            <C.Title>ok</C.Title>
          </C.Button>
        </C.Content>
      </GestureHandlerRootView>
    </Modal>
  );
}
