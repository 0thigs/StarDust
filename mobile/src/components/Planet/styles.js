import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');

export const Container = styled.View`
  margin-bottom: 40px;
  width: ${width - 100}px;
`;

export const PlanetInfo = styled(Animated.View)`
  flex-direction: row;
  padding: 0 4px;
  align-items: center;
`;

export const PlanetSign = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.green_800};
  border-radius: 10px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 8px;
  height: 64px;
  max-width: 175px;
`;

export const PlanetName = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 14px;
  margin-left: 12px;
`;

export const StarsList = styled.FlatList``;
