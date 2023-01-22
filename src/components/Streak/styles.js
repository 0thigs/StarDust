import styled from 'styled-components/native';
import { containerWidth } from '../../screens/Profile/styles';

export const Container = styled.View`
  width: ${containerWidth}px;
  align-self: center;
  border-radius: 4px;
  border-width: 2px;
  border-color: ${props => props.theme.colors.gray_500};
  margin-top: 40px;
  padding: 12px 0;
`;

export const Title = styled.Text`
  margin-left: 8px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 14px;
  text-align: center;
`;

export const WeekDays = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const WeekDay = styled.View``;

export const WeekDayName = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
`;

export const StreakCount = styled.Text`
  margin-top: 12px;
  text-align: center;
  color: ${props => props.theme.colors.green_500};
  font-family: ${props => props.theme.fonts.regular};
`;
