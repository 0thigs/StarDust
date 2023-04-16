import styled from 'styled-components/native';

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.green_900};
  border-radius: 8px;
  padding: 24px;
`;

export const Header = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semibold};
  margin-bottom: 12px;
`;

export const Footer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 12px;
`;

export const Button = styled.TouchableOpacity`
padding: 8px;
`;

export const Text = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.green_500};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
