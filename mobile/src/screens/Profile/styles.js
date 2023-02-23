import styled from 'styled-components/native';

export const containerWidth = 330;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding-bottom: 24px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  margin-top: 40px;
  color: ${props => props.theme.colors.green_500};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 14px;
  text-align: center;
`;

export const Achievements = styled.View`
  width: ${containerWidth}px;
  align-self: center;
  align-items: center;
`;

export const NoAchievements = styled.Text`
  margin-top: 16px;
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 14px;
`;
