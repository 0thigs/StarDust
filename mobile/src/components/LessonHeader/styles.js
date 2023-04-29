import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { lessonContainerWidth } from '../../screens/Lesson/styles';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: ${lessonContainerWidth};
`;

export const Main = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 8px 0 8px;
`;

export const Lives = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

export const LivesCount = styled.Text`
  color: ${({ theme }) => theme.colors.red_700};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  margin-left: 4px;
`;

export const ProgressBar = styled.View`
  background-color: ${({ theme }) => theme.colors.purple_700};
  width: 100%;
  height: 20px;
  margin: 8px 0 24px;
  border-radius: 4px;
  flex-direction: row;
`;

export const Bar = styled(Animated.View)`
  height: 100%;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.green_500};
`;
