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

export const CoinsContainer = styled.View``;
export const CoinsHeader = styled.View``;
export const CoinsCount = styled.View``;
export const Metrics = styled.View``;
export const Metric = styled.View``;
