import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.Modal``;

export const Background = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Box = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

export const Content = styled(Animated.View)`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.green_900};
  height: 250px;
  width: 75%;
  padding: 24px;
  border-radius: 8px;
  justify-content: space-between;
`;

export const Heading = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Controls = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

export const Button = styled.TouchableOpacity`
  padding: 4px;
  background-color: red;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.green_700};
  align-self: flex-end;
`;

export const Range = styled.View`
  justify-content: space-between;
`;

export const Track = styled.View``;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
`;
