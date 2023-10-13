import styled, { css } from 'styled-components/native';

const white = css`
  border-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
`;

const red = css`
  border-color: ${({ theme }) => theme.colors.red_700};
  color: ${({ theme }) => theme.colors.red_700};
`;

const green = css`
  border-color: ${({ theme }) => theme.colors.green_500};
  color: ${({ theme }) => theme.colors.green_500};
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.purple_700};
 
  padding: 8px;
  
  width: ${({ width }) => width}px;
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: 16px;

  border-width: 1px;
  border-radius: 12px;
  ${({ color }) => color === 'white' && white}
  ${({ color }) => color === 'red' && red}
  ${({ color }) => color === 'green' && green}
`;