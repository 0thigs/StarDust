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
  background-color: ${props => props.theme.colors.green_700};
  border-radius: 10px;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 8px;
  height: 64px;
`;

export const PlanetTitle = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 14px;
  margin-left: 4px;
`;

export const StarsList = styled.FlatList``;