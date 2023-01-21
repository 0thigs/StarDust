import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  margin: 16px 0;

  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props =>
    props.color === 'red'
      ? props.theme.colors.red_700
      : props.color === 'yellow'
      ? props.theme.colors.yellow_300
      : props.theme.colors.green_300};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const Loader = styled.ActivityIndicator``;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props =>
    props.color === 'red' ? props.theme.colors.white : props.theme.colors.green_900};
`;
