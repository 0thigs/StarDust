import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const Message = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.white};
  font-size: 24px;
`;

export const CoinsContainer = styled.View`
  border-width: 1px;
  border-color: ${props => props.theme.colors.yellow_300};
`;
export const CoinsHeader = styled.View`
  background-color: ${props => props.theme.colors.yellow_300};
`;
export const CoinsHeaderText = styled.Text`
  font-size: 16px;
`;

export const CoinsCount = styled.Text`
  font-size: 16px;
`;

export const Metrics = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
