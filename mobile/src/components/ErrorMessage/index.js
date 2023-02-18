import styled from 'styled-components/native';

export function ErrorMessage({ message }) {
  return <Container>{message}</Container>;
}

export const Container = styled.Text`
  font-size: 15px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.red_700};
`;
