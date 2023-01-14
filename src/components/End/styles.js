import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 40px;
`;

export const Message = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.white};
  font-size: 24px;
`;

export const CoinsContainer = styled.View`
 border-top-width: 1px;
  border-color:${props =>
    props.isAnswerWrong ? props.theme.colors.red_700 : props.theme.colors.green_300};
`;
export const CoinsHeader = styled.View`
  background-color: ${props => props.theme.colors.yellow_500};
`;
export const CoinsCount = styled.View`
    font-size: 16px;
`;
export const Metrics = styled.View`

`;
export const Metric = styled.View``;
