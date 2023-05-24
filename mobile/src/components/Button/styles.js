import { TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

export const Container = styled(AnimatedButton)`
  width: 100%;
  height: ${({ isSmall }) => (isSmall ? 32 : 40)}px;
  margin: 8px 0;

  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ background }) => background};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const Loader = styled.ActivityIndicator``;

export const Title = styled.Text`
  font-size: ${({ isSmall }) => (isSmall ? 14 : 16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ color }) => color};
`;
