import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const Avatar = styled.Image`
  height: 72px;
  width: 72px;
  border-radius: 36px;
  border-width: 1px;
  border-color: ${({ color }) => color};
  margin-left: 12px;
  margin-top: auto;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin: 0 auto;
`;

export const Position = styled(Animatable.View)`
  background-color: ${({ color }) => color};
  width: 100%;
  align-items: center;
  padding: 12px 0;
  height: ${({ _position }) => 200 - 25 * _position}px;
  margin-top: 12px;
`;

export const Number = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Xp = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.yellow_500};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 4px;
`;
