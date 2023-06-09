import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  position: relative;
`;

export const CodeButtons = styled.View`
  position: absolute;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.gray_900};
  border: 0.6px solid transparent;
  border-top-color: ${({ theme }) => theme.colors.green_700};
  width: 100%;
  height: 52px;
  bottom: 0;
  justify-content: center;
`;

export const KeysList = styled.ScrollView``;

export const CodeButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 8px;
  flex-direction: row;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  color: ${({ theme, isRunButton }) => (isRunButton ? theme.colors.green_500 : theme.colors.white)};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
