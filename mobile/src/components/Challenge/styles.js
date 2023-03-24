import styled from 'styled-components/native';

const colors = {
  Fácil: 'green_300',
  Médio: 'yellow_300',
  Difícil: 'red_300',
};

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_900};
  border-radius: 8px;
  padding: 16px 12px;
  margin-top: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Difficulty = styled.View`
  border: 1px solid ${({ theme, difficulty }) => theme.colors[colors[difficulty]]};
  padding: 8px;
  border-radius: 16px;
`;

export const DifficultyName = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme, difficulty }) => theme.colors[colors[difficulty]]};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green_300};
  margin-left: 8px;
`;

export const Info = styled.View`
  flex-direction: row;
  margin-top: 12px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 12px;
`;

export const StatusText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray_500};
  margin-left: 8px;
`;

export const Tags = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 12px;
`;

export const Tag = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.gray_500};
  padding: 4px;
  border-radius: 8px;
  margin-right: 8px;
`;
