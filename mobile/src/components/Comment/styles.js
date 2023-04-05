import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 12px;
`;

export const Info = styled.View``;

export const Header = styled.View`
  flex-direction: row;
`;

export const Username = styled.Text`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.green_700};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.green_700};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const Body = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  flex-wrap: wrap
`;

export const Footer = styled.View``;
