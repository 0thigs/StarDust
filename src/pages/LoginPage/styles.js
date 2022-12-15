import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";

//LARGURA PADRAO DO CONTAINER: 350px

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  justify-content: center;
  align-items: center;
`;

//----------HEADER----------

export const Header = styled.View`
  width: 350px; //Largura Padão
  height: auto;
  justify-content: space-between;
`;

export const HeaderAdjust = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

export const ImageLoad = styled.Image`
  height: 31px;
  width: 31px;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const HeaderTitle = styled(Animatable.Text)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.green};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: ${(props) => props.theme.fonts.regular};
`;

//----------FORM----------

export const Form = styled.View`
  width: 350px;
  height: auto;
  margin: 50px;
`;

export const Form_Email_Container = styled.View`
  margin-bottom: 10px;
`;

export const Form_Password_Container = styled.View`
  margin-top: 10px;
`;

export const Form_Email_Text = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.green};
  font-family: ${(props) => props.theme.fonts.semibold};
`;

export const Form_Password_Text = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.green};
  font-family: ${(props) => props.theme.fonts.semibold};
`;

export const Form_Email_Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.gray,
}))`
  width: 85%;
  height: 44px;
  padding-top: 5px;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: #fff;
`;

export const Form_Password_Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.gray,
}))`
  width: 75%;
  height: 44px;
  padding-top: 5px;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: #fff;
`;

export const Form_Input_Email_Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border: solid 1px ${(props) => props.theme.colors.gray};
  border-radius: 5px;
  padding: 0 10px;
`;

export const Form_Input_Password_Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border: solid 1px ${(props) => props.theme.colors.gray};
  border-radius: 5px;
  padding: 0 10px;
`;

//----------SUBMIT----------

export const Submit = styled.View`
  width: 350px;
  height: 150px;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.green};
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.darkGreen};
`;

export const ForgotSignUpCont = styled.View`
height: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  font-size: 13px;
  font-family: ${(props) => props.theme.fonts.semibold};
  color: ${(props) => props.theme.colors.gray};
`;

export const SignUp = styled.TouchableOpacity``;

export const SignUpText = styled.Text`
  font-size: 13px;
  color: ${(props) => props.theme.colors.gray};
  font-family: ${(props) => props.theme.fonts.semibold};
`;

export const Span = styled.Text`
  color: ${(props) => props.theme.colors.green};
`;
