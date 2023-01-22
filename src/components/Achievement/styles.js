import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100px;
  padding: 4px 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${props => props.theme.colors.green_500};
  margin-top: 12px;
`;

export const AchievementsInfo = styled.View`
  width: 70%;
  padding: 4px;
  margin-left: 8px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: ${props => props.theme.colors.green_500};
`;

export const AchievementsTitle = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 14px;
`;

export const AchievementsDescription = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 12px;
`;

export const ProgressBarInfo = styled.View`
  flex-direction: row;
`;

export const ProgressBar = styled.View`
  margin-top: 8px;
  width: 70%;
  height: 4px;
  background-color: ${props => props.theme.colors.gray_500};
`;

export const Bar = styled.View`
  width: 70%;
  height: 4px;
  background-color: ${props => props.theme.colors.green_500};
`;

export const ProgressBarGoal = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 12px;
  margin-left: 4px;
`;
