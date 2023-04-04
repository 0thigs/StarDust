import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { lessonContainerWidth } from '../../screens/Lesson/styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 40px;
  width: 100%;
`;

export const QuestionStem = styled(Animatable.Text)`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 16px;
  max-width: ${lessonContainerWidth};
  margin: 8px 0 16px;
  align-self: center;
`;

export const QuestionCode = styled.ScrollView`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 16px;
  align-self: center;
  width: 350px;
  max-height: 220px;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 16px;
`;

export const Buttons = styled.View``;
