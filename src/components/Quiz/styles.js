import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 40px;
`;

export const QuestionStem = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 16px;
`;

export const OptionsList = styled.FlatList``;

export const Option = styled.TouchableOpacity``;

export const Input = styled.TextInput``;

export const ItemsList = styled.FlatList``;

export const Item = styled.View``;