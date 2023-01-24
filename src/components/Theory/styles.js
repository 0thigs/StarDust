import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  width: 350px;
  margin-top: 40px;
`;

export const Title = styled(Animatable.Text)`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 20px;
`;

export const Theories = styled.ScrollView`
  width: 100%;
`;

export const Theory = styled.View``;

export const TextContainer = styled(Animatable.View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 16px 0;
`;

export const DefaultText = styled.Text`
  background-color: ${props => props.theme.colors.purple_700};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 14px;
  width: 100%;
  border-radius: 10px;
  padding: 16px;
`;

export const EmphasisText = styled.Text`
  background-color: ${props => props.theme.colors.blue_700};
  color: ${props => props.theme.colors.blue_300};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 14px;
  border-radius: 10px;
  border-width: 2px;
  border-left-color: ${props => props.theme.colors.blue_300};
  padding: 16px;
  width: 100%;
`;

export const AlertText = styled.Text`
  background-color: ${props => props.theme.colors.yellow_300};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.regular};
  border-radius: 10px;
  padding: 16px;
  width: 85%;
  margin-left: 18px;
`;

export const ExampleTextContainer = styled(Animatable.View)`
  margin: 16px 0;
`;

export const ExempleTextTitle = styled.Text`
  color: ${props => props.theme.colors.green_500};
  font-family: ${props => props.theme.fonts.bold};
`;

export const ExempleText = styled.View`
  background-color: ${props => props.theme.colors.green_900};
  border-radius: 8px;
`;

export const SpeechButton = styled.TouchableOpacity`
  padding-bottom: 24px;
`;
