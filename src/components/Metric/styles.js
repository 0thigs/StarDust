import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View)`
  border-width: 1px;
  border-color: ${props => props.color};
  border-radius: 8px;
  width: ${props => (props.isLarge ? 250 : 100)}px;
  overflow: hidden;
  margin: 0 auto 12px;
`;

export const Header = styled.View`
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
  padding: 4px;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.black};
  font-size: 16px;
`;

export const Body = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const Count = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  margin-left: 4px;
  margin-bottom: -8px;
`;
