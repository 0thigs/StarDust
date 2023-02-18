import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  padding: 48px 12px 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${props => props.theme.colors.green_500};
`;

export const Content = styled.View`
  padding: 24px;
`;

export const HeaderButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.white};
`;

export const Text = styled.Text`
  text-transform: uppercase;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.green_500};
`;

export const Avatar = styled.View`
  align-items: center;
  padding: 8px 0 8px;
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${props => props.theme.colors.background};
  margin-bottom: 10px;
`;

export const Form = styled.View`
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.Text`
  font-size: 15px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.red_700};
`;
