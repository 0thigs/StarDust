import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 16px 0;
  width: 90%;
`;

export const Title = styled(Animatable.Text)`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.semibold};
  font-size: 16px;
  margin-bottom: 4px;
  align-self: flex-start;
`;
