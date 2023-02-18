import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export const Container = styled(AnimatedTouchableOpacity)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 12px;
  border-radius: 8px;
  border-bottom-width: 4px;
  border-bottom-color: ${props => props.theme.colors.green_500};
  background-color: ${props => props.theme.colors.background};
`;
