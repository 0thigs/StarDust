import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.green_500};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 32px;
  border-radius: 12px;
  padding: 12px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
`;

export const Icon = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.black};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-right: 12px;
`;

export const CodesList = styled.FlatList``;
