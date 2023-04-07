import styled from 'styled-components/native';

export const Container = styled.View`
  height: 330px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.green_900};
  justify-content: center;
  border-radius: 8px;
`;

export const Code = styled.ScrollView`
  margin-bottom: 4px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const ButtonWrapper = styled.View`
  width: 45%;
  margin-left: ${({ isRight }) => (isRight ? 24 : 0)}px;
`;
