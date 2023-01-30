import styled from 'styled-components/native';

const defaultIdent = 12;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Lines = styled.View`
  width: 350px;
`;

export const Line = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${props => defaultIdent * props.indentLevel}px;
  margin-bottom: 4px;
`;

export const Text = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 16px;
`;

export const DropZone = styled.View`
  min-width: 25px;
  border-width: 1px;
  border-bottom-color: ${props => props.theme.colors.green_500};
  color: ${props => props.theme.colors.green_500};
  margin-top: -12px;
  margin-left: 8px;
`;

export const DropItems = styled.View`
  margin-top: 70%;
  flex-direction: row;
  flex-wrap: wrap;
  width: 350px;
  justify-content: center;
`;

export const DropItem = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.purple_700};
  border-color: ${props => props.theme.colors.white};
  border-width: 1px;
  border-radius: 4px;
  padding: 8px;
  margin-left: 12px;
  min-width: 40px;
`;

export const Label = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 16px;
`;
