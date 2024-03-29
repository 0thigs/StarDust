import styled from 'styled-components/native';
import Animated, { Transitioning } from 'react-native-reanimated';

export const Container = styled(Transitioning.View)`
  background-color: ${({ theme }) => theme.colors.gray_900};
  opacity: ${({ isLocked }) => (isLocked ? 0.5 : 1)};
  padding: 12px;
  width: 90%;
  border-radius: 4px;
  margin-bottom: 12px;
  align-self: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.View`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.green_900};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, isCorrect }) => theme.colors[isCorrect ? 'green_500' : 'red_700']};
  margin-left: 12px;
`;

export const Button = styled(Animated.View)`
  margin-left: auto;
  padding: 8px;
`;

export const Body = styled.View`
  margin-top: 16px;
`;

export const Put = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.gray_500};
`;

export const Value = styled.View`
  background-color: ${({ from, theme }) =>
    from === 'user' ? theme.colors.gray_700 : theme.colors.black};
  padding: 4px 8px;
  border-radius: 4px;
  flex-direction: ${({ isInput }) => (isInput ? 'row' : 'column')};
`;

export const ValueText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ from, theme }) => theme.colors[from === 'user' ? 'black' : 'gray_700']};
`;
