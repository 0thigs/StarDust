import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${prop => prop.theme.colors.background};
  padding: 24px;
`;

export const SortInputList = styled.View`
`;

export const ChallengesList = styled.FlatList`
  flex: 1;
  background-color: ${prop => prop.theme.colors.background};
`;
