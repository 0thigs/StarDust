import styled from 'styled-components/native';

export const containerWidth = 300;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;
