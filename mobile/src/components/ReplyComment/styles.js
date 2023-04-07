import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');

export const Container = styled.View`
  flex-direction: row;
  padding: 12px;
  width: 100%;
  border: 0.4px solid ${({ theme }) => theme.colors.black};
`;

export const Info = styled.View`
  padding: 0 8px;
  width: ${width - 50}px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 4px;
  align-items: center;
  justify-content: center;
`;

export const Authorname = styled.Text`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.green_700};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.green_700};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Content = styled.View``;

export const Generic = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
`;

export const Code = styled.ScrollView`
  min-height: 50px;
`;

export const Footer = styled.View`
  margin-top: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  ${({ marginRight }) => 'margin-right: ' + marginRight};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  padding: 2px;
`;

export const LikesCount = styled.Text`
  color: ${({ theme }) => theme.colors.green_700};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-right: auto;
`;

export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 12px;
`;

export const EditInputWrapper = styled.View``;

export const Label = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.gray_500};
`;

export const EditInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.green_700};
  border-bottom-width: 1px;
  margin-bottom: 12px;
`;

export const EditButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CodeButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray_500};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;
