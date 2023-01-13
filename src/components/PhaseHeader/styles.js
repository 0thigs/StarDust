import styled from "styled-components/native";

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
  margin-top: 24px;
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