import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.green_300};
  margin: 12px auto 24px;
`;

export const Winners = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;
