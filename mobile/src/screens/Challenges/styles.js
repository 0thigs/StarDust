import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${prop => prop.theme.colors.background};
  padding: 24px;
`;

export const FiltersList = styled.View`
  flex-flow: row;
  flex-wrap: wrap;
`;

export const TagsList = styled.View`
  flex-flow: row;
  flex-wrap: wrap;
  margin: 12px 0;
`;

export const Tag = styled.View`
  flex-flow: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_900};
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  border-radius: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export const TagName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme, color }) => (color ? color : theme.colors.gray_500)};
  margin: 0 4px;
`;

export const RemoveTagButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const ChallengesList = styled.FlatList`
  flex: 1;
  background-color: ${prop => prop.theme.colors.background};
`;
