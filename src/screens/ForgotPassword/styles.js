import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  justify-content: center;
  padding: 0 32px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  margin-bottom: 12px;
`;

export const Form = styled.View`
  width: 100%;
  margin-bottom: 12px;
`;

export const SuccessMessage = styled.Text`
  color: ${props => props.theme.colors.green_500};
  font-family: ${props => props.theme.fonts.regular};
`;
