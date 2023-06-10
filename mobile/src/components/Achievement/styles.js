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
  border-bottom-color: ${({ theme }) => theme.colors.green_500};
  margin-top: 12px;
  z-index: 10;
`;

export const Info = styled.View`
  width: 70%;
  padding: 4px;
  margin-left: 8px;
`;

export const Name = styled.Text`
  color: ${({ canRescue, theme }) => theme.colors[canRescue ? 'green_500' : 'white']};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
`;

export const ProgressBarInfo = styled.View`
  flex-direction: row;
`;

export const ProgressBar = styled.View`
  margin-top: 8px;
  width: 70%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 8px;
`;

export const Bar = styled.View`
  width: ${({ barWidth }) => barWidth};
  height: 4px;
  background-color: ${({ theme }) => theme.colors.green_500};
  border-radius: 8px;
`;

export const ProgressBarrequiredAmount = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  margin-left: 4px;
`;

export const Message = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 95%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 16px;
`;

export const Reward = styled.Text`
  color: ${({ theme, isCoins }) => theme.colors[isCoins ? 'yellow_300' : 'green_500']};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
`;
