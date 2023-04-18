import styled from 'styled-components/native';

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_700};
  border-radius: 8px;
  padding: 12px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 8px 16px 0;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
`;

export const Exit = styled.TouchableOpacity``;

export const TopicsList = styled.FlatList.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})``;

export const Topic = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_700};
  padding: 8px;
  border-radius: 8px;
  opacity: ${({ isUnlocked }) => (isUnlocked ? 1 : 0.5)};
  position: relative;
  width: 160px;
  margin: 8px;
`;

export const TopicTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const Icon = styled.View`
  position: absolute;
  top: 0;
  right: 8px;
`;

export const Texts = styled.ScrollView`
  height: 400px;
`;

export const Back = styled.TouchableOpacity``;
