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
  width: 320px;
  height: 220px;
  padding: 24px;
  border-radius: 8px;
  justify-content: space-between;
`;

export const Heading = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Range = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: -4px;
`;

export const Controls = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  margin: 24px 0;
  /* background: red; */
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green_700};
`;

export const Track = styled.View`
  height: 4px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.green_700};
`;

export const Thumb = styled.View`
  height: 4px;
  width: 10%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.green_300};
`;

export const Knob = styled.View`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.green_500};
  transform: translateY(-4px);
`;

export const Label = styled.Text`
  top: -24px;
  position: absolute;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;
