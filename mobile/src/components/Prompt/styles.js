import styled from 'styled-components/native';

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.green_900};
`;

export const Title = styled.text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Buttons = styled.View`
  flex-direction: row;
`;
