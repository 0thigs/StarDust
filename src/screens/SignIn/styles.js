import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

//LARGURA PADRAO DO CONTAINER: 350px

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  justify-content: center;
  padding: 0 40px;
`;

//----------HEADER----------

export const Header = styled.View`
  justify-content: space-between;
`;

export const Heading = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`;

export const HeaderTitle = styled(Animatable.Text)`
  font-size: 24px;
  margin-left: 12px;
  color: ${props => props.theme.colors.green_300};
  font-family: ${props => props.theme.fonts.bold};
`;

export const HeaderSubtitle = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: ${props => props.theme.fonts.regular};
`;

//----------FORM----------

export const Form = styled.View`
  width: 100%;
  flex-direction: column;
`;

//----------SUBMIT----------

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  margin-top: 28px;

  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.green_300};
`;

export const SubmitButtonText = styled.Text`
  font-size: 18px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.green_900};
`;

export const AccountButtons = styled.View`
  width: 100%;
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const AccountButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const AccountButtonText = styled.Text`
  font-size: 14px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.white};
`;

export const ErrorMessage = styled.Text`
  font-size: 15px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.red_700};
`;
