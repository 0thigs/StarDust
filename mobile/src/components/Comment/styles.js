import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');

export const Container = styled.View`
  flex-direction: row;
  padding: 12px;
  width: 100%;
`;

export const Info = styled.View`
  padding: 0 8px;
  width: ${width - 50}px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 4px;
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

export const Body = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FooterButton = styled.TouchableOpacity`
  ${({ marginRight }) => 'margin-right: ' + marginRight};
  padding: 2px;
`;

export const LikesCount = styled.Text`
  color: ${({ theme }) => theme.colors.green_700};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-right: auto;
`;

export const ReplyText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;
