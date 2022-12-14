import styled from "styled-components/native";
import * as Animatable from 'react-native-animatable'

export const Container = styled.View`
  flex: 1;
  background-color: #141a1b;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const Title = styled(Animatable.Text)`
  color: #20925D;
  font-size: 60px;
  font-weight: bold;
`;

export const TitleSpan = styled.Text`
  color: #00FF88;
`;

export const Subtitle = styled.Text`
  color: #C3C7BB;
`

export const Button = styled.TouchableOpacity`
  width: 45px;
  height: 40px;
  background-color: #00FF88;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`
export const Image = styled.Image`
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 3px;
`
