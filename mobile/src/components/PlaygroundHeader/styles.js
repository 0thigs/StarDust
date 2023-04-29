import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green_900};
  flex-direction: row;
  padding: 16px 0;
`;

export const Title = styled.Text`
  margin: ${({ align }) => (align === 'right' ? '0 auto 0 24px' : 'auto')};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.green_500 : theme.colors.white)};
`;

export const HeaderButton = styled.TouchableOpacity`
  padding: 4px;
`;
