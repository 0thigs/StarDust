import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  margin: 8px 0;

  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => props.background};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const Loader = styled.ActivityIndicator``;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.color};
`;
