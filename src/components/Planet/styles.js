import styled from 'styled-components/native';

export const Container = styled.View`
    width: 300px;
    margin-bottom: 40px;
`;

export const PlanetInfo = styled.View`
  flex-direction: row;
  padding: 0 4px;
  align-items: center;
`;

export const PlanetSign = styled.View`
  background-color: ${props => props.theme.colors.green_700};
  border-radius: 10px;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 8px;
  height: 64px;
`;

export const PlanetName = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 14px;
  margin-left: 4px;
`;

export const StarDust = styled.View`
  width: 100%;
  padding-left: 40px;
`;
