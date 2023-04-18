import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.green_900};

`;

export const CodeButtons = styled.View`
  position: absolute;
  right: 0;
  background-color: ${({ theme }) => theme.colors.gray_900};
  border: 0.6px solid ${({ theme }) => theme.colors.green_700};
  width: 120px;
`;

export const CodeButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  color: ${({ theme, isRunButton }) => (isRunButton ? theme.colors.green_500 : theme.colors.white)};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

