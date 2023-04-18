import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  width: 300px;
  margin-bottom: 40px;
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
