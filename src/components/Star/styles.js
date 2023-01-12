import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  position: relative;
`;

export const StarDust = styled.View`
  width: 100%;
  padding-left: 42px;
  opacity: ${props => (props.isDisabled ? 0.5 : 1)};
`;

export const StarButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  opacity: ${props => (props.isDisabled ? 0.5 : 1)};
`;

export const StarNumber = styled.Text`
  font-size: 16px;
  color: ${props => (props.isDisabled ? props.theme.colors.white : props.theme.colors.yellow_500)};
  font-family: ${props => props.theme.fonts.bold};
  position: absolute;
  top: 36%;
  left: 18%;
`;

export const StarSign = styled.View`
  border-width: 2px;
  border-color: ${props =>
    props.isDisabled ? props.theme.colors.gray_500 : props.theme.colors.yellow_300};
  border-style: dotted;
  border-radius: 10px;
  padding: 16px 12px;
  margin-left: 10px;
  max-width: 180px;
`;

export const StarName = styled.Text`
  color: ${props =>
    props.isDisabled ? props.theme.colors.gray_500 : props.theme.colors.yellow_300};
  flex-wrap: wrap;
`;
