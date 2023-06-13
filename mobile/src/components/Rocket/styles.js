import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
const screenWidth = Dimensions.get('screen').width;
const screenHorizontalPadding = 24;
const rockteMarginBetween = 4;
const rocketWidth = screenWidth / 2 - screenHorizontalPadding - rockteMarginBetween;

export const Container = styled.SafeAreaView`
  width: ${rocketWidth}px;
  margin-bottom: 18px;
  border-width: 1px;
  border-color: ${({ isSelected, theme }) =>
    theme.colors[isSelected ? 'yellow_300' : 'background']};
  border-radius: 8px;
  overflow: hidden;
  opacity: ${({ isAvailable }) => (isAvailable ? 1 : 0.7)};
`;

export const Background = styled.ImageBackground`
  height: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0 12px;
`;

export const Price = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  margin-bottom: 12px;
`;

export const Coins = styled.Text`
  color: ${({ theme }) => theme.colors.yellow_300};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  margin-bottom: -8px;
  margin-left: 4px;
`;

export const ImageContainer = styled(Animated.View)``;

export const Info = styled.ImageBackground`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.green_900};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme, isSelected }) => theme.colors[isSelected ? 'yellow_300' : 'white']};

  text-align: center;
  margin: 8px 0 0;
`;

export const Text = styled.Text`
  margin: 12px 0;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  text-align: center;
`;

export const AcquiredRocket = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
`;
