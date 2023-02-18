import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

export const Container = styled.ScrollView.attrs({})``;

export const Background = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Achievements = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})``;

export const AchievementContainer = styled.View`
  position: relative;
`;
