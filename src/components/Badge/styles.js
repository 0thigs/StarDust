import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  padding: 12px 0;
  position: relative;
`;

export const Lock = styled.View`
  position: absolute;
  top: 35%;
`;

export const Name = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  margin-top: 4px;
  max-width: 150px;
`;
