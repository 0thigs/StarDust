import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  align-items: center;
  padding: 40px;
`;

export const PhaseHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled.TouchableOpacity``;

export const Lives = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LivesCount = styled.Text`
  color: ${props => props.theme.colors.red_700};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 20px;
  margin-left: 4px;
`;

export const ProgressBar = styled.View`
  background-color: ${props => props.theme.colors.purple_700};
  width: 100%;
  height: 20px;
  margin-top: 12px;
  border-radius: 4px;
`;

export const Bar = styled.View`
  width: 40%;
  height: 100%;
  align-items: flex-end;
  background-color: ${props => props.theme.colors.green_500};
`;

export const Rocket = styled.Image`
  width: 40%;
  height: 100%;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 20px;
`;

export const PhaseTitle = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 20px;
`;

export const Theories = styled.ScrollView`
  width: 100%;
`;

export const TextContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 14px;
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

export const AlertText = styled.Text`
  background-color: ${props => props.theme.colors.yellow_300};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.regular};
  border-radius: 10px;
  padding: 16px;
  width: 85%;
  margin-left: 18px;
`;

export const ExampleTextContainer = styled.View`
  width: 100%;
  margin-top: 14px;
  justify-content: center;
`;

export const ExempleTextTitle = styled.Text`
  color: ${props => props.theme.colors.green_500};
  font-family: ${props => props.theme.fonts.bold};
`;

export const ExempleText = styled.Text`
  background-color: ${props => props.theme.colors.green_900};
  color: ${props => props.theme.colors.green_500};
  font-family: ${props => props.theme.fonts.regular};
  border-radius: 10px;
  padding: 16px;
  margin-left: 18px;
  margin-top: 4px;
`;
