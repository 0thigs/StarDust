import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 15;
`;

export const Tip = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  line-height: 24px;
`;
