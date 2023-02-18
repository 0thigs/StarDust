import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${prop => prop.theme.colors.background};
`;

export const Badges = styled.ImageBackground`
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${props => props.theme.colors.green_700};
`;

export const Warning = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.green_500};
`;

export const BadgesList = styled.FlatList``;

export const UsersList = styled.FlatList``;
