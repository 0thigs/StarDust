import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.green_900};
  border: 1px solid ${({ theme }) => theme.colors.green_500};
  padding: 24px;
  margin-bottom: 12px;
  border-radius: 8px;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 12px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-self: flex-end;
`;

export const Button = styled.TouchableOpacity`
padding: 4px;
`;
