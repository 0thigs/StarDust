import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  position: relative;
`;

export const CodeButtons = styled.View`
  position: absolute;
  left: 0;
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
