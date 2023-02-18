import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 8px;
`;

export const Position = styled.Text`
  font-family: ${props => props.theme.fonts.semibold};
  margin: 0 auto;
`;

export const Avatar = styled.Image`
  border-radius: 50px;
  max-width: 100%;
  height: auto;
`;

export const Name = styled.Text`
  font-family: ${props => props.theme.fonts.semibold};
  margin: 0 auto;
`;

export const Xp = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
`;
