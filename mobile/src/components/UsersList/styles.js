import styled from 'styled-components/native';

export const Divider = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-bottom: 8px;
`;

export const Message = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.medium};
  margin: 0 8px;
`;