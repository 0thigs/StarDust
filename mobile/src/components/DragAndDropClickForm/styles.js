import styled from 'styled-components/native';
import { css } from 'styled-components';
import Animated from 'react-native-reanimated';

const defaultIdent = 12;
export const itemHeight = 40;
export const itemPadding = 8;
export const itemBorderWidth = 1;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Lines = styled(Animated.View)`
  width: 350px;
  margin-bottom: 32px;
`;

export const Line = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${({ indentLevel }) => defaultIdent * indentLevel}px;
  margin-bottom: 4px;
  align-self: flex-start;
  margin-bottom: 8px;
`;

export const Content = styled.View``;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.code};
`;

export const DropZone = styled.View`
  width: ${({ width }) => width}px;
  border-width: 1px;
  border-bottom-color: ${({ theme, isAnswerWrong }) =>
    theme.colors[isAnswerWrong ? 'red_700' : 'green_500']};
  color: ${({ theme }) => theme.colors.green_500};
  margin: 0 8px 0;
`;

export const DropItems = styled.View`
  margin-top: 32px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 350px;
  height: ${itemHeight}px;
  justify-content: center;
`;

export const DropItem = styled(Animated.View)`
  margin-left: 12px;
  margin-bottom: 12px;
  min-width: 40px;
  justify-content: center;
  align-items: center;
  padding: 0 ${itemPadding}px;
  border-width: ${itemBorderWidth}px;
  border-color: transparent;
  height: ${itemHeight}px;

  ${({ isItemInZone }) =>
    !isItemInZone &&
    css`
      background-color: ${({ theme }) => theme.colors.purple_700};
      border-color: ${({ theme }) => theme.colors.white};
      border-radius: 4px;
    `}
`;

export const Label = styled.Text`
  color: ${({ theme, isItemInZone, isAnswerWrong }) =>
    theme.colors[isItemInZone && isAnswerWrong ? 'red_300' : isItemInZone ? 'green_500' : 'white']};
  font-family: ${({ theme }) => theme.fonts.code};
`;
