import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  padding: 48px 12px 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${({ theme }) => theme.colors.green_500};
`;

export const Content = styled.View`
  padding: 24px;
`;

export const Button = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.Text`
  text-transform: uppercase;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.green_500};
`;

export const Avatar = styled.View`
  align-items: center;
  padding: 8px 0 8px;
`;

export const ChangePasswordButton = styled.TouchableOpacity`
  margin-top: 24px;
  border: 1px solid ${({ theme }) => theme.colors.green_500};
  border-radius: 4px;
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 10px;
`;

export const ToggleInput = styled.View`
  margin-top: 12px;
  border: 1px solid ${({ theme }) => theme.colors.green_500};
  border-radius: 4px;
  padding: 8px 24px;
  justify-content: space-between;
  flex-direction: row;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.green_500};
  margin-right: auto;
`;

export const Time = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
`;

export const Form = styled.View`
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.red_700};
`;
