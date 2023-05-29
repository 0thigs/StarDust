import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: ${({ isLoading }) => (isLoading ? 'center' : 'stretch')};
`;

export const Badges = styled.ImageBackground`
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${({ theme }) => theme.colors.green_700};
  height: 152px;
  padding-left: 8px;
`;

export const Warning = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 24px;
`;

export const Days = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.code};
  color: ${({ theme }) => theme.colors.green_300};
  font-size: 16px;
  font-weight: 700;
`;

export const BadgesList = styled.FlatList``;

export const UsersList = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    padding: 24,
  },
}))``;
