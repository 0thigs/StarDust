import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
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

export const Button = styled.TouchableOpacity`
  margin-top: 12px;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  align-self: center;
  background-color: ${props => props.theme.colors.green_700};
  justify-content: center;
  align-items: center;
  padding: 12px;
`;
