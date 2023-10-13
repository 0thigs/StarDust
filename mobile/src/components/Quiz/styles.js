import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { lessonContainerWidth } from '../../screens/Lesson/styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 40px;
  width: 100%;
`;

export const Content = styled.ScrollView``;

export const QuestionTitle = styled(Animatable.Text)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  max-width: ${lessonContainerWidth};
  margin: 8px 0 16px;
  letter-spacing: 0.8px;
  line-height: 24px;
  align-self: center;
`;

export const QuestionCode = styled.View`
  align-self: center;
  width: ${lessonContainerWidth};
  height: ${({ height }) => height}px;
`;

export const Text = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`;

export const Buttons = styled.View``;
