import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  margin-right: 12px;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.green_300};
`;

export const Option = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_900};
  padding: 4px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray_500};
  margin-left: 8px;
`;

export const attrStyles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.gray_900,
    borderWidth: 1,
    borderColor: theme.colors.gray_500,
    borderRadius: 4,
    height: 40,
    width: 148,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dropdown: {
    top: 70,
    position: 'absolute',
    justifyContent: 'center',
  },
  row: {
    backgroundColor: theme.colors.gray_900,
  },
  search: {
    backgroundColor: theme.colors.gray_900,
    borderWidth: 1,
    borderColor: theme.colors.gray_700,
  },
  searchText: {
    color: theme.colors.gray_700,
  },
});
