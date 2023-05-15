import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 15;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.green_300};
  margin: 0 auto 12px;
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
