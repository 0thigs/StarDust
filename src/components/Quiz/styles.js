import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 40px;
  width: 100%
`;

export const QuestionStem = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 16px;
  margin: 20px;
  text-align: center;
`;

export const Content = styled.View`
flex: 1;
background-color: red;
align-items: center;

`;

export const OptionsList = styled.FlatList``;

export const Input = styled.TextInput``;

export const ItemsList = styled.FlatList``;

export const Item = styled.View``;
