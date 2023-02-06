import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

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
  margin: 20px;
  text-align: center;
`;

export const Text = styled.Text`
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 16px;
`;

export const Buttons = styled.View`
`;
