import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_700};
  border-top-width: 1px;
  border-color: ${({ theme, isAnswerWrong }) =>
    theme.colors[isAnswerWrong ? 'red_700' : 'green_300']};
  align-items: center;
  padding: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const CommentsButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
`;

export const Feedback = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_700};
  align-items: center;
`;

export const Message = styled(Animatable.Text)`
  color: ${({ theme, isAnswerWrong }) => theme.colors[isAnswerWrong ? 'red_700' : 'green_300']};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  font-size: 18px;
  margin-top: 4px;
`;
