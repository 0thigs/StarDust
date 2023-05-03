import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  align-items: flex-start;
  justify-content: center;
  padding: 24px 0 0;
  margin-bottom: auto;
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

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.gray_500};
  font-family: ${({ theme }) => theme.fonts.regular};
  align-self: center;
  max-width: 250px;
  margin-bottom: auto;
`;

export const CodesList = styled.FlatList``;
