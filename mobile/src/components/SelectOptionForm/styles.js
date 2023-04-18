import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Options = styled.View`
  align-items: center;
`;

export const OptionContainer = styled(Animatable.View)`
  align-items: center;
`;

export const Option = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.purple_700};
  border-width: 1px;
  border-color: ${({ theme, isSelected, isAnswerWrong, isCorrectAnswer }) =>
    isAnswerWrong && isSelected
      ? theme.colors.red_300
      : isCorrectAnswer
      ? theme.colors.green_500
      : isSelected
      ? theme.colors.blue_300
      : theme.colors.white};
  height: 48px;
  width: 350px;
  border-radius: 4px;
  margin-top: 8px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  color: ${({ theme, isSelected, isAnswerWrong, isCorrectAnswer }) =>
    isAnswerWrong && isSelected
      ? theme.colors.red_300
      : isCorrectAnswer
      ? theme.colors.green_500
      : isSelected
      ? theme.colors.blue_300
      : theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
