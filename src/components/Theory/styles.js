import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const minHeightText = 150;

export const Container = styled.View`
  flex: 1;
  margin-top: 40px;
`;

export const Title = styled(Animatable.Text)`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 20px;
  align-self: center;
`;

export const Theories = styled.ScrollView`
`;

export const Theory = styled.View``;

export const TextContainer = styled(Animatable.View)`
  flex-direction: ${props => (props.type === 'alert' ? 'row' : 'column')};
  align-items: center;
  margin: 16px 0;
  min-height: ${minHeightText}px;
`;

export const DefaultTextTitle = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.semibold};
  font-size: 16px;
  margin-bottom: 4px;
  align-self: flex-start;
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

export const ExempleText = styled.View`
  background-color: ${props => props.theme.colors.green_900};
  border-radius: 8px;
`;

export const SpeechButton = styled.TouchableOpacity`
  padding-bottom: 24px;
`;
