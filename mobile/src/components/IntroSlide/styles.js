import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 400px;
  height: 400px;
  margin-top: 12px;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.green_500};
  font-size: 16px;
  margin-top: 24px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 12px;
  letter-spacing: 0.4px;
  line-height: 18px;
`;
