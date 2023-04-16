import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.green_300};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`;

export const Footer = styled.View`
  align-items: center;
  padding: 24px;
  width: 100%;
`;

export const PaginationDots = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const Dot = styled(AnimatedButton)`
  width: ${({ isActive }) => (isActive ? 24 : 12)}px;
  height: 16px;
  border-radius: ${({ isActive }) => (isActive ? 12 : 6)}px;
  background-color: ${({ theme, isActive }) => theme.colors[isActive ? 'green_500' : 'green_900']};
  margin-left: ${({ isFirst }) => (isFirst ? 0 : 12)}px;
`;

export const ButtonContainer = styled.View`
  margin-top: 32px;
  position: relative;
`;

export const SliderButton = styled.TouchableOpacity`
  width: 72px;
  height: 72px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.green_700};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 18%;
  left: 5.8%;
`;

export const End = styled.View`
  align-items: center;
  padding: 24px;
`;
