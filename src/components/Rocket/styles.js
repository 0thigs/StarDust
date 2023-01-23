import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

const screenHorizontalPadding = 24;
const rockteMarginBetween = 8;
const rocketWidth =
  Dimensions.get('screen').width / 2 - screenHorizontalPadding - rockteMarginBetween;

export const Container = styled.SafeAreaView`
  width: ${rocketWidth}px;
  margin-bottom: 18px;
  border-width: 1px;
  border-color: ${props =>
    props.isSelected ? props.theme.colors.yellow_300 : props.theme.colors.background};
  border-radius: 8px;
  overflow: hidden;
  opacity: ${props => (props.isAcquired ? 1 : 0.7)};
`;

export const RocketBackground = styled.ImageBackground`
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
  margin-bottom: 4px;
`;

export const Coins = styled.Text`
  color: ${prop => prop.theme.colors.yellow_300};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 18px;
  margin-bottom: -8px;
  margin-left: 4px;
`;

export const RocketImageContainer = styled(Animated.View)``;

export const Info = styled.ImageBackground`
  padding: 12px;
  background-color: ${prop => prop.theme.colors.purple_700};
`;

export const Name = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => (props.isSelected ? props.theme.colors.yellow_300 : props.theme.colors.white)};

  text-align: center;
  font-size: 16px;
  margin: 8px 0 0;
`;

export const Text = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.white};
  font-size: 16px;
`;