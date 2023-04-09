import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 80px;
  background-color: ${props => props.theme.colors.background};
`;

export const Name = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: 14px;
  color: ${props => props.theme.colors.white};
`;

export const Email = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: 12px;
  color: ${props => props.theme.colors.white};
`;

export const Buttons = styled.View`
  align-self: center;
  width: 150px;
`;

export const ButtonWrapper = styled.View`
  flex-direction: column;
`;

export const Menu = styled.View`
  align-self: flex-end;
`;

export const AchievementList = styled.FlatList``;
