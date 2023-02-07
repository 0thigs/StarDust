import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Options = styled.View`
  align-items: center;
`;

export const OptionContainer = styled(Animatable.View)`
  align-items: center;
`;

export const Option = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.purple_700};
  border-width: 1px;
  border-color: ${props =>
    props.userOptions.includes(props.checkedOption)
      ? props.theme.colors.blue_300
      : props.theme.colors.white};
  min-height: 48px;
  width: 350px;

  margin-top: 20px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Box = styled.View`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-color: ${props =>
    props.userOptions.includes(props.checkedOption)
      ? props.theme.colors.blue_300
      : props.theme.colors.white};
  margin-left: 8px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-10px);
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  color: ${props =>
    props.userOptions.includes(props.checkedOption)
      ? props.theme.colors.blue_300
      : props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  margin: auto;
`;
