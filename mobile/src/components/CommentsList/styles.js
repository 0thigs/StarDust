import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 8px;
`;

export const FilterWrapper = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  padding: 8px;
`;

export const Filter = styled.TouchableOpacity`
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const Content = styled.View``;
