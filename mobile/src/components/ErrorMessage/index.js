import styled from 'styled-components/native';

export const Container = styled.Text`
  font-size: 14px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.red_700};
`;

export function ErrorMessage({ message }) {
  return <Container>{message}</Container>;
}
