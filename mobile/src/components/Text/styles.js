import styled from 'styled-components/native';
import { css } from 'styled-components';
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View)`
  flex-direction: ${({ type }) => (type === 'alert' ? 'row' : 'column')};
  align-items: center;
  margin: 16px 0;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 16px;
  margin-bottom: 4px;
  align-self: flex-start;
`;

export const Code = styled.ScrollView`
  border-radius: 10px;
  position: relative;
  width: 100%;
`;

const DefaultContainer = css`
  background-color: ${({ theme }) => theme.colors.purple_700};
  width: 100%;
`;

export const CodeButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.blue_700};
  border: 0.4px ${({ theme }) => theme.colors.green_700};
  border-radius: 8px;
  padding: 4px;
  position: absolute;
  right: 0;
  bottom: 8px;
  z-index: 5;
`;

export const CodeButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.green_700};
  text-transform: uppercase;
  font-size: 12px;
  padding: 2px;
`;

const ListContainer = css`
  background-color: ${({ theme }) => theme.colors.blue_700};
  border-left-width: 2px;
  border-left-color: ${({ theme }) => theme.colors.blue_300};
  width: 100%;
`;

const AlertContainer = css`
  background-color: ${({ theme }) => theme.colors.yellow_300};
  width: 85%;
  margin-left: 18px;
`;

export const Body = styled.View`
  border-radius: 8px;
  padding: 16px;
  ${({ type }) => type === 'default' && DefaultContainer}
  ${({ type }) => type === 'list' && ListContainer}
  ${({ type }) => type === 'alert' && AlertContainer}
`;

export const Text = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) =>
    theme.colors[type === 'alert' ? 'black' : type === 'list' ? 'blue_300' : 'white']};
  letter-spacing: 0.8px;
  line-height: 18px;
`;

export const SpeechButton = styled.TouchableOpacity`
  padding-bottom: 12px;
`;
