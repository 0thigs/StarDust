import styled from 'styled-components/native';

export const Container = styled.View`
  margin-right: 12px;
  margin-bottom: 8px;
`;

export const Select = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_900};
  border: 1px solid ${({ theme }) => theme.colors.gray_700};
  border-radius: 4px;
  padding: 4px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.green_300};
  font-family: ${({ theme }) => theme.fonts.medium};
  
`;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_900};
  min-width: 140px;
  padding: 4px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, isLast }) => theme.colors[isLast ? 'gray_900' : 'gray_500']};
`;

export const Title = styled.Text`
  color: ${({ theme, color }) => (color ? color : theme.colors.gray_500)};
  font-family: ${({ theme }) => theme.fonts.medium};
  padding: 8px;
`;

export const Content = styled.View`
  max-width: 240px;
  padding: 12px;
  align-items: center;
`;

export const Search = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 32px;
  margin-left: 4px;
  border-radius: 4px;
  padding-left: 4px;
  background-color: ${({ theme }) => theme.colors.gray_500};
`;
