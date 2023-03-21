import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Trigger = styled.TouchableOpacity`
  position: absolute;
  top: -8px;
  right: 0;
  padding: 12px;
`;

export const Content = styled.Modal``;

export const Outside = styled.SafeAreaView`
  flex: 1;
`;

export const Menu = styled(Animated.View)`
  position: absolute;
  top: 24px;
  right: 24px;
  background-color: ${({ theme }) => theme.colors.green_900};
  padding: 8px 12px;
  border-radius: 8px;
`;

export const Button = styled.TouchableOpacity`
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ isLastButton, theme }) =>
    isLastButton ? 'transparent' : theme.colors.green_500};

  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  margin-right: 24px;
`;

export const Checkbox = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.green_500};
  background-color: ${({ isChecked, theme }) =>
    theme.colors[isChecked ? 'green_500' : 'background']};

  align-items: center;
  justify-content: center;
`;

export const Empty = styled.View`
  width: 18px;
  height: 18px;
`;
