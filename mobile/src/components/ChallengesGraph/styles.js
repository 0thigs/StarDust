import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Graph = styled.View``;

export const Count = styled.Text`
  position: absolute;
  top: 42%;
  left: ${({ currentCount }) => (currentCount > 10 ? '36%' : '39%')};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.code};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 12px;
`;

export const Legends = styled.View``;

export const Legend = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Dash = styled.View`
  width: 24px;
  height: 4px;
  background-color: ${({ color }) => color};
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 12px;
`;

export const Fraction = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Numerator = styled.Text`
  font-family: ${props => props.theme.fonts.semibold};
  color: ${({ color }) => color};
`;

export const Denominator = styled.Text`
  font-family: ${props => props.theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.gray_500};
`;
