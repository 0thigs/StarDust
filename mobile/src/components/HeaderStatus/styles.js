import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

export const Container = styled.TouchableOpacity`
  margin-right: 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CoinsCount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.yellow_300};
`;

export const Streak = styled(LottieView)`
  width: 40px;
  height: 40px;
`;

export const StreakCount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  margin-top: 5px;
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.green_500};
`;
