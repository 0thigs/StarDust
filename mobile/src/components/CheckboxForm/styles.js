import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { lessonContainerWidth } from '../../screens/Lesson/styles';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Options = styled.View`
  align-items: center;
`;

export const OptionContainer = styled(Animatable.View)`
  align-items: center;
  width: ${lessonContainerWidth};
`;

export const Option = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.purple_700};
  border-width: 1px;
  border-color: ${({ theme, isSelected, isAnswerWrong, isAnswerCorrect }) =>
    isAnswerWrong && isSelected
      ? theme.colors.red_300
      : isAnswerCorrect && isSelected
      ? theme.colors.green_500
      : isSelected
      ? theme.colors.blue_300
      : theme.colors.white};
  min-height: 48px;
  width: 100%;

  border-radius: 4px;
  margin-top: 8px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Box = styled.View`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-radius: 2px;
  border-color: ${({ theme, isSelected, isAnswerWrong, isAnswerCorrect }) =>
    isAnswerWrong && isSelected
      ? theme.colors.red_300
      : isAnswerCorrect && isSelected
      ? theme.colors.green_500
      : isSelected
      ? theme.colors.blue_300
      : theme.colors.white};
  margin-left: 8px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-10px);
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  color: ${({ theme, isSelected, isAnswerWrong, isAnswerCorrect }) =>
    isAnswerWrong && isSelected
      ? theme.colors.red_300
      : isAnswerCorrect && isSelected
      ? theme.colors.green_500
      : isSelected
      ? theme.colors.blue_300
      : theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  margin: auto;
`;
