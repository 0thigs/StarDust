import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-right: 70px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CoinsCount = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 10px;
  color: ${props => props.theme.colors.yellow_300};
`;

export const Hearts = styled.TouchableOpacity`
  flex-direction: row;
`;

export const HeartsCount = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  margin-top: 5px;
  margin-left: 5px;
  color: ${props => props.theme.colors.red_700};

`;
