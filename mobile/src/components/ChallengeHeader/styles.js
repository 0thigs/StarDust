import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  width: 100%;
  padding-top: 24px;
  background-color: ${prop => prop.theme.colors.gray_900};
`;

export const Top = styled.View`
  flex-direction: row;
  padding: 0 12px;
`;

export const HeaderButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  margin: ${props => (props.align === 'right' ? '0 auto 0 24px' : 'auto')};
  font-family: ${props => props.theme.fonts.medium};
  font-size: 16px;
  color: ${props => (props.isActive ? props.theme.colors.green_500 : props.theme.colors.white)};
`;

export const Navigation = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavigationButton = styled.TouchableOpacity`
  width: 33%;
  justify-content: center;
  align-items: center;
 
  padding-bottom: 12px;
`;

export const Indicator = styled(Animated.View)`
  background-color: ${props => props.theme.colors.green_500};
  height: 1px;
  width: 33%;
`;
