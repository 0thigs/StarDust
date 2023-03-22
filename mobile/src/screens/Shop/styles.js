import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs(({ isLoading }) => ({
  contentContainerStyle: {
    flex: isLoading ? 1 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 48,
  },
}))`
  background-color: ${prop => prop.theme.colors.background};
  padding: 24px;
`;

export const Title = styled.Text`
  align-self: flex-start;
  color: ${prop => prop.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 18px;
  margin-bottom: 12px;
`;

export const RocketList = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const AvatarsList = styled.FlatList``;

export const LifeList = styled.ScrollView`
  flex-direction: row;
`;

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
