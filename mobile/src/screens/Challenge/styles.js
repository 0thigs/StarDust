import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${prop => prop.theme.colors.background};
  align-items: center;
  padding: 32px 0 32px;
`;

export const Header = styled.View`
  width: 100%;
  padding: 12px 12px 0;
  background-color: ${prop => prop.theme.colors.gray_900};
`;
export const Top = styled.View`
  flex-direction: row;
`;
export const HeaderButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  margin-right: auto;
  margin-left: 24px;
  font-family: ${props => props.theme.fonts.medium};
  font-size: 16px;
  color: ${props => (props.isActive ? props.theme.colors.green_500 : props.theme.colors.white)};
  text-align: center;
`;

export const Navigation = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavigationButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: ${props => props.isActive && props.theme.colors.green_500};
`;
