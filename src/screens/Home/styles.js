import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

export const Container = styled.View``;

export const Background = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const PlanetsList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: 32,
    alignItems: 'center',
  },
})``;

export const Achievements = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})``;

export const AchievementContainer = styled.View`
  position: relative;
`;

export const Animation = styled(LottieView)`
  width: 220px;
  height: 220px;
  position: absolute;
  top: -15%;
  left: -10%;
  opacity: 0.7;
  z-index: -5;
`;
