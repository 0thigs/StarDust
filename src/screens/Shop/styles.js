import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.ScrollView`
  background-color: ${prop => prop.theme.colors.background};
  padding: 24px;
`;

export const Title = styled.Text`
  color: ${prop => prop.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 18px;
  margin-bottom: 12px;
`;

export const RocketList = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const LifeList = styled.ScrollView`
  flex-direction: row;
`;