import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');

export const Container = styled(Animatable.View)`
  border-width: 1px;
  border-color: ${({ color }) => color};
  border-radius: 8px;
  width: ${({ isLarge }) => (isLarge ? width - 48 - 48 : width / 3 - 24)}px;
  overflow: hidden;
  margin: 8px auto 12px;
`;

export const Header = styled.View`
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
  padding: 4px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
`;

export const Body = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const Count = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  margin-left: 4px;
  margin-bottom: -8px;
`;
