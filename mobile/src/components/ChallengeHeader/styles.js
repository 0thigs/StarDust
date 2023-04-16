import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  width: 100%;
  padding-top: 24px;
  background-color: ${({ theme }) => theme.colors.gray_900};
`;

export const Top = styled.View`
  flex-direction: row;
  padding: 0 12px;
`;

export const HeaderButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  margin: ${({ align }) => (align === 'right' ? '0 auto 0 24px' : 'auto')};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  color: ${({ theme, isActive }) => theme.colors[isActive ? 'green_500' : 'white']};
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
  background-color: ${({ theme }) => theme.colors.green_500};
  height: 1px;
  width: 33%;
`;

export const Buttons = styled.View`
  flex-direction: row;
  max-width: 100%;
`;
