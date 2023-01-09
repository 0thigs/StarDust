import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  margin-top: 18px;

  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.green_300};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.green_900};
`;
