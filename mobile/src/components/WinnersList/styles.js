import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.green_300};
  margin: 12px auto 24px;
`;

export const Winners = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

export const Message = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.green_300};
  margin: 12px 0;
`;

export const RewardMessage = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 95%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 16px;
`;

export const Reward = styled.Text`
  color: ${({ theme }) => theme.colors.green_500};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
`;
