import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  padding: 0 32px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 12px;
`;

export const Form = styled.View`
  width: 100%;
  margin-bottom: 12px;
`;

export const SuccessMessage = styled.Text`
  color: ${({ theme }) => theme.colors.green_500};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const List = styled.View`
  width: 100%;
  padding: 8px 4px;
  align-items: center;
`;

export const Item = styled.View`
  flex-direction: row;
  width: 90%;
  margin-bottom: 8px;
`;

export const Constraint = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  flex-wrap: wrap;
  margin-left: 4px;
`;
