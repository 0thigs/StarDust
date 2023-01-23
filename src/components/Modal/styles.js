import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.Modal``;

export const Fade = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Content = styled(Animatable.View)`
  width: 90%;
`;

export const Header = styled.View`
  align-items: center;
  background-color: ${props => props.theme.colors.blue_700};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 16px 0 0;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 16px;
  text-align: center;
`;

export const Body = styled.View`
  justify-content: center;
  align-items: center;
  padding: 8px 0 8px;
  background-color: ${props => props.theme.colors.black};
`;

export const Footer = styled.View`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 8px;
  background-color: ${props => props.theme.colors.black};
`;
