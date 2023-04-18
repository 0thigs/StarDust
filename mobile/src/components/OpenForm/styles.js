import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom-width: 1px;
  border-color: ${({ theme, isAnswerWrong }) =>
    isAnswerWrong ? theme.colors.red_700 : theme.colors.green_500};
  height: 32px;
  color: ${({ theme, isAnswerWrong }) =>
    isAnswerWrong ? theme.colors.red_700 : theme.colors.green_500};
  width: 200px;
  font-size: 16px;
  align-self: center;
`;
