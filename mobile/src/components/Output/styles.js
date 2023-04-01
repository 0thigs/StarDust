import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.gray_900};
`;

export const Header = styled.View`
  padding: 0 8px 8px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 16px;
`;

export const Result = styled.Text`
  color: ${({ theme }) => theme.colors.gray_500};
  font-family: ${props => props.theme.fonts.medium};
`;
