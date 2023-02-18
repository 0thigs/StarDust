import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex: 1;
`;

export const CodeButtons = styled.View`
  width: 100%;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  background-color: ${props => props.theme.colors.gray_900};
`;

export const KeysList = styled.FlatList``;

export const CodeButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 16px 16px;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  color: ${props => (props.isRunButton ? props.theme.colors.green_500 : props.theme.colors.white)};
  font-family: ${props => props.theme.fonts.regular};
`;
