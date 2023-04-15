import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

export const Container = styled(AnimatedButton)`
  padding: 8px;
`;

export const Image = styled.View`
  position: relative;
  margin-bottom: 12px;
`;

export const Message = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 16px;
`;

export const Reward = styled.Text`
  color: ${({ theme }) => theme.colors.green_500};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
`;
