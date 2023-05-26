import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${({ width }) => width}px;
  height: 200px;
  flex-direction: row;
  margin-left: ${({ isFirstItem }) => (isFirstItem ? 0 : 8)}px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ isSelected, theme }) =>
    theme.colors[isSelected ? 'yellow_300' : 'background']};
  opacity: ${({ isAvailable }) => (isAvailable ? 1 : 0.5)};
  position: relative;
`;

export const Info = styled.View`
  width: 45%;
  padding: 12px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.green_900};
  border-radius: 4px;
`;

export const Price = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const Coins = styled.Text`
  color: ${({ theme }) => theme.colors.yellow_300};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  margin-bottom: -8px;
  margin-left: 4px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme, isSelected }) => theme.colors[isSelected ? 'yellow_300' : 'white']};

  text-align: center;
  font-size: 16px;
  margin: 8px 0 0;
  margin-bottom: 12px;
`;

export const Image = styled.Image`
  width: 55%;
  height: 100%;
  border-radius: 4px;
`;

export const Icon = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const Text = styled.Text`
  margin: 12px 0;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  text-align: center;
`;

export const AcquiredAvatar = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 12px 0 4px;
`;

export const AcquiredAvatarImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 4px;
`;
