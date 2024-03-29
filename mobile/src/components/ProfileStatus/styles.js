import { StyleSheet } from 'react-native';
import { containerWidth } from '../../screens/Profile/styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 24px 0 12px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${({ theme }) => theme.colors.green_500};
`;

export const ProfileButton = styled.TouchableOpacity`
  position: absolute;
  top: 48px;
  right: 4px;
  padding: 8px;
`;

export const AvatarButton = styled.TouchableOpacity`
  position: relative;
`;

export const Icon = styled.View`
  position: absolute;
  right: 0;
  top: 80%;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.green_500};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 20px;
`;

export const Created_at = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 16px;
`;

export const Level = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 14px;
`;

export const Ranking = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RankingImage = styled.Image`
  width: 50px;
  height: 50px;
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
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`;

export const Title = styled.Text`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.green_500};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 14px;
`;
