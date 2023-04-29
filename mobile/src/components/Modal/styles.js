import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import Animated from 'react-native-reanimated';

export const Container = styled.Modal``;

export const Fade = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled(Animated.View)`
  width: 90%;
`;

export const Header = styled.View`
  align-items: center;
  background-color: ${props => props.theme.colors.blue_700};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 16px;
`;

export const Animation = styled(LottieView)`
  width: 170px;
  height: 170px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.semibold};
  font-size: 16px;
  text-align: center;
  width: 90%;
`;

export const Body = styled.View`
  justify-content: center;
  align-items: center;
  padding: 8px 12px 8px;
  background-color: ${props => props.theme.colors.black};
  max-height: 300px;
`;

export const Footer = styled.View`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 8px 16px;
  background-color: ${props => props.theme.colors.black};
`;
