import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  margin: 18px 0;

  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props =>
    props.color === 'red' ? props.theme.colors.red_700 : props.theme.colors.green_300};
`;

export const Loader = styled.ActivityIndicator``;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props =>
    props.color === 'red' ? props.theme.colors.white : props.theme.colors.green_900};
`;
