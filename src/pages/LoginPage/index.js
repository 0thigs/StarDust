import React, { useState } from "react";
import * as Icon from "react-native-feather";
import {
  Container,
  Header,
  HeaderAdjust,
  HeaderTitle,
  ImageLoad,
  Subtitle,
  Form,
  Form_Email_Text,
  Form_Email_Container,
  Form_Password_Text,
  Form_Password_Container,
  Form_Email_Input,
  Form_Password_Input,
  Form_Input_Email_Container,
  Form_Input_Password_Container,
  Submit,
  ForgotPassword,
  ForgotPasswordText,
  Button,
  ButtonText,
  SignUp,
  SignUpText,
  Span,
  ForgotSignUpCont
} from "./styles";

const LoginPage = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <Container>
      <Header>
        <HeaderAdjust>
          <ImageLoad
            source={require("../../assets/LoginPageAssets/SignIn.png")}
          />
          <HeaderTitle animation={"fadeInRight"} duration={1500}>Faça seu Login</HeaderTitle>
        </HeaderAdjust>
        <Subtitle>Entre com suas informações de cadastro</Subtitle>
      </Header>
      <Form>
        <Form_Email_Container>
          <Form_Email_Text>E-mail</Form_Email_Text>
          <Form_Input_Email_Container>
            <Icon.Mail color={"#00FF88"} style={{ marginHorizontal: 10 }} />
            <Form_Email_Input placeholder={"Digite seu e-mail"} />
          </Form_Input_Email_Container>
        </Form_Email_Container>
        <Form_Password_Container>
          <Form_Password_Text>Senha</Form_Password_Text>
          <Form_Input_Password_Container>
            <Icon.Lock color={"#00FF88"} style={{ marginHorizontal: 10 }} />
            <Form_Password_Input
              placeholder={"Digite sua senha"}
              secureTextEntry={secureTextEntry}
            />
            {secureTextEntry ? (
              <Icon.Eye
                color={"#00FF88"}
                style={{ marginHorizontal: 10 }}
                onPress={toggleSecureTextEntry}
              />
            ) : (
              <Icon.EyeOff
                color={"#00FF88"}
                style={{ marginHorizontal: 10 }}
                onPress={toggleSecureTextEntry}
              />
            )}
          </Form_Input_Password_Container>
        </Form_Password_Container>
      </Form>
      <Submit>
        <Button>
          <ButtonText>ENTRAR</ButtonText>
        </Button>
        <ForgotSignUpCont>
          <ForgotPassword>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
          <SignUp>
            <SignUpText>Registre-se</SignUpText>
          </SignUp>
        </ForgotSignUpCont>
      </Submit>
    </Container>
  );
};

export default LoginPage;
