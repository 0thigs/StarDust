import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  background-color: #141a1b;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const Title = styled(Animatable.Text)`
  color: #20925d;
  font-size: 60px;
  font-weight: bold;
`;

export const TitleSpan = styled.Text`
  color: #00ff88;
`;

export const Subtitle = styled(Animatable.Text)`
  color: #c3c7bb;
`;

export const ButtonContainer = styled(Animatable.View)`

`;

export const PlayButton = styled.TouchableOpacity``;
export const Image = styled.Image`
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 3px;
`;
