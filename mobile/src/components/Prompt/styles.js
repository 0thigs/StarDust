import styled from 'styled-components/native';

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.green_900};
  align-items: center;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.white};

`;

export const Input = styled.TextInput`
  width: 70%;
  padding: 12px 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.green_300};
  background: ${({ theme }) => theme.colors.purple_700};
  color: ${({ theme }) => theme.colors.green_300};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  margin: 16px 0;
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.View`
  width: 45%;
  flex-direction: row;
  margin-left: ${({ isRight }) => (isRight ? 24 : 0)}px;
`;
