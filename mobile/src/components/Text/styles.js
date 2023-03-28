import styled from 'styled-components/native';
import { css } from 'styled-components';
import * as Animatable from 'react-native-animatable'

export const Container = styled(Animatable.View)`
  flex-direction: ${props => (props.type === 'alert' ? 'row' : 'column')};
  align-items: center;
  margin: 16px 0;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.semibold};
  font-size: 16px;
  margin-bottom: 4px;
  align-self: flex-start;
`;

export const Code = styled.ScrollView`
  border-radius: 10px;
  min-width: 250px;
`;

const DefaultStyle = css`
  background-color: ${props => props.theme.colors.purple_700};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 14px;
  width: 100%;
  border-radius: 10px;
  padding: 16px;
`;

const ListStyle = css`
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

const AlertStyle = css`
  background-color: ${props => props.theme.colors.yellow_300};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.regular};
  border-radius: 10px;
  padding: 16px;
  width: 85%;
  margin-left: 18px;
`;


export const Body = styled.Text`
    ${props => props.type === 'default' && DefaultStyle}
    ${props => props.type === 'list' && ListStyle}
    ${props => props.type === 'alert' && AlertStyle}
`;

export const SpeechButton = styled.TouchableOpacity`
  padding-bottom: 24px;
`;
