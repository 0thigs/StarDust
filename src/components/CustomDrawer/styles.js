import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 80px;
  background-color: ${props => props.theme.colors.background};
`;

export const UserAvatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 10px;

`;

export const UserName = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: 14px;
  color: ${props => props.theme.colors.white};
`;

export const UserEmail = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: 12px;
  color: ${props => props.theme.colors.white};
`;

export const LogOutButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.green_500};
  padding: 3px;
  border-radius: 4px;
  width: 40%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const LogOutButtonText = styled.Text`
  font-size: 14px;
  font-family: ${props => props.theme.fonts.bold};

`;
