import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  position: relative;
`;

export const CodeButtons = styled.View`
  position: absolute;
  right: 0;
  background-color: ${props => props.theme.colors.gray_900};
  border: 0.6px solid ${props => props.theme.colors.green_700};
  width: 120px;
`;

export const KeysList = styled.FlatList``;

export const CodeButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  color: ${props => (props.isRunButton ? props.theme.colors.green_500 : props.theme.colors.white)};
  font-family: ${props => props.theme.fonts.regular};
`;
