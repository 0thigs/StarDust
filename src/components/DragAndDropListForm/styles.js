import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { css } from 'styled-components';

export const minZoneWidth = 50;

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const ItemContainer = styled.TouchableOpacity``;

export const Item = styled(Animated.View)`
  background-color: ${props => props.theme.colors.purple_700};
  ${props => props.isActive && css`
  border-width: 1px;
  border-color: ${props => props.theme.colors.blue_300};;
  `}
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 48px;
  width: 350px;
  padding: 0 8px;
  margin-bottom: 8px;
`;


export const Label = styled.Text`
  color: ${props =>
    props.isAnswerWrong
      ? props.theme.colors.red_700
      : props.isVerified
      ? props.theme.colors.green_500
      : props.theme.colors.blue_300};
  text-align: center;
`;

export const Decorator = styled.Text`
  color: ${props =>
    props.isAnswerWrong
      ? props.theme.colors.red_700
      : props.isVerified
      ? props.theme.colors.green_500
      : props.theme.colors.blue_300};
  font-size: 24px;
`;
