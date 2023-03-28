import styled from 'styled-components/native';

export const Container = styled.View``;

export const List = styled.FlatList``;

export const Navigation = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: 16px 0;
`;

export const NavButton = styled.TouchableOpacity`
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  border: 1px solid ${({ theme }) => theme.colors.blue_300};
  border-radius: 8px;
  padding: 8px;
  justify-content: center;
  align-items: center;
`;
