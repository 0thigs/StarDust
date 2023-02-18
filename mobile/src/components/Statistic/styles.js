import styled from 'styled-components/native';
import { containerWidth } from '../../screens/Profile/styles';

export const Container = styled.View`
  width: ${containerWidth}px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

const StatisticPaddingBetween = 4;

export const Statistic = styled.View`
  width: ${containerWidth / 3 + StatisticPaddingBetween}px;
  border-width: 0.8px;
  border-right-color: ${props => props.hasBorderRight && props.theme.colors.green_500};
  align-items: center;
  padding-right: ${StatisticPaddingBetween}px;
`;

export const CountContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Count = styled.Text`
  margin-top: 8px;
  margin-left: 8px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 18px;
  text-align: center;
`;

export const Title = styled.Text`
  margin-left: 8px;
  color: ${props => props.theme.colors.green_500};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 14px;
`;
