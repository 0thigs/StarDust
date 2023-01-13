import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.blue_700};
  border-top-width: 1px;
  border-color:${props =>
    props.isAnswerWrong ? props.theme.colors.red_700 : props.theme.colors.green_300};
  align-items: center;
  padding: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Feedback = styled.View`
  background-color: ${props => props.theme.colors.blue_700};
  align-items: center;
`;

export const Message = styled.Text`
  color: ${props =>
    props.isAnswerWrong ? props.theme.colors.white : props.theme.colors.green_300};
  font-family: ${props => props.theme.fonts.bold};
  text-align: center;
  font-size: 18px;
  margin-top: 4px;
`;
