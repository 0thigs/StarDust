import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${prop => prop.theme.colors.gray_900};
  flex-direction: row;
  padding: 24px 0 0;
`;

export const Title = styled.Text`
  margin: ${props => (props.align === 'right' ? '0 auto 0 24px' : 'auto')};
  font-family: ${props => props.theme.fonts.medium};
  font-size: 16px;
  color: ${props => (props.isActive ? props.theme.colors.green_500 : props.theme.colors.white)};
`;

export const HeaderButton = styled.TouchableOpacity`
  margin: 0 12px;
`;
