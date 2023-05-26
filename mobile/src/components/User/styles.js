import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme, isLoggedUser }) =>
    theme.colors[isLoggedUser ? 'green_700' : 'gray_900']};
`;

export const Position = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme, color }) => theme.colors[color]};
  width: 28px;
  align-items: flex-start;
  padding-left: 8px;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin-left: 12px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, isLoggedUser }) => theme.colors[isLoggedUser ? 'green_300' : 'gray_500']};
  margin: 0 auto;
`;

export const Xp = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.gray_700};
`;
