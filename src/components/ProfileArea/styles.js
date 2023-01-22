import { StyleSheet } from 'react-native';
import { containerWidth } from '../../screens/Profile/styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 24px 0 12px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${props => props.theme.colors.green_500};
`;

export const SettingsButton = styled.TouchableOpacity`
  position: absolute;
  top: 48px;
  right: 24px;
`;

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${props => props.theme.colors.green_500};
  margin-bottom: 10px;
`;

export const Name = styled.Text`
  color: ${props => props.theme.colors.green_500};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 20px;
`;

export const Created_at = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  margin-bottom: 16px;
`;

export const Level = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 14px;
`;
export const Ranking = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${containerWidth}px;
`;

export const Status = styled.View`
  height: 120px;
  align-items: center;
  justify-content: space-between;
`;

export const StatusName = styled.Text`
  margin-left: 4px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 14px;
`;

export const Title = styled.Text`
  margin-left: 8px;
  color: ${props => props.theme.colors.green_500};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 14px;
`;
