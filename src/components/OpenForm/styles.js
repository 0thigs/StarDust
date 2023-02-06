import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Input = styled.TextInput`
  background-color: ${props => props.theme.colors.background};
  border-bottom-width: 1px;
  border-color: ${props =>
    props.isAnswerWrong ? props.theme.colors.red_700 : props.theme.colors.green_500};
  height: 32px;
  color: ${props =>
    props.isAnswerWrong ? props.theme.colors.red_700 : props.theme.colors.green_500};
  width: 200px;
  font-size: 16px;
  align-self: center;
`;
