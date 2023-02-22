import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${prop => prop.theme.colors.background};
`;

export const Badges = styled.ImageBackground`
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${props => props.theme.colors.green_700};
  padding-left: 8px;
`;

export const Warning = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.white};
  margin-top: 24px;
`;

export const Days = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.semibold};
  color: ${props => props.theme.colors.green_300};
  font-size: 16px;
`;

export const Divider = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-bottom: 8px;
`;

export const Message = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.green_500};
  margin: 0 8px;
`;

export const BadgesList = styled.FlatList``;

export const UsersList = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    padding: 24,
  },
}))``;
