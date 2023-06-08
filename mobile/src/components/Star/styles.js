import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View)`
  align-items: center;
`;

export const StarDust = styled.View`
  width: 100%;
  padding-left: 42px;
  opacity: ${({ isUnlocked }) => (isUnlocked ? 0.5 : 1)};
`;

export const StarContainer = styled(Animated.View)`
  position: relative;
`;

export const StarButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 4px;
  opacity: ${({ isUnlocked }) => (isUnlocked ? 0.5 : 1)};
  margin-top: 12px;
`;

export const Rocket = styled(Animated.View)``;

export const StarContent = styled.View`
  top: -50%;
  left: ${({ isUnlocked }) => (isUnlocked ? 46 : 45)}%;
`;

export const StarNumber = styled.Text`
  font-size: 18px;
  color: ${({ isUnlocked, theme }) => theme.colors[isUnlocked ? 'yellow_500' : 'white']};
  font-family: ${({ theme }) => theme.fonts.code};
  font-weight: bold;
`;

export const StarSign = styled.View`
  border-width: 2px;
  border-color: ${({ isUnlocked, theme }) => theme.colors[isUnlocked ? 'yellow_300' : 'gray_500']};
  border-style: dotted;
  border-radius: 10px;
  padding: 16px 12px;
  margin-left: 4px;
  margin-top: -12px;
  max-width: 180px;
`;

export const StarName = styled.Text`
  color: ${({ isUnlocked, theme }) => theme.colors[isUnlocked ? 'yellow_300' : 'gray_500']};
  flex-wrap: wrap;
`;
