import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;
  background-color: ${props => props.theme.colors.background};
  border-top-color: ${props => props.theme.colors.green_500};
  border-top-width: ${StyleSheet.hairlineWidth}px;
`;

export const TabButton = styled.TouchableOpacity`
  /* background-color: red; */
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TabLabel = styled.Text`
  font-size: 12px;
  margin-top: -6px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => (props.isActive ? props.theme.colors.green_300 : props.theme.colors.white)};
`;
