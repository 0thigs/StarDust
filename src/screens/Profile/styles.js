import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${prop => prop.theme.colors.background};
`;

export const ProfileArea = styled.View`
  background-color: ${prop => prop.theme.colors.blue_700};
`;


