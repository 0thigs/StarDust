import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { lessonContainerWidth } from '../../screens/Lesson/styles';

export const minHeightText = 250;

export const Container = styled.View`
  flex: 1;
  margin-top: 40px;
  align-items: center;
  width: 100%;
`;

export const Title = styled(Animatable.Text)`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 20px;
  align-self: center;
`;

export const Theories = styled.ScrollView`
  width: ${lessonContainerWidth};
`;

export const ButtonContainer = styled.View`
  width: 90%;
  margin-bottom: 4px;
`;
