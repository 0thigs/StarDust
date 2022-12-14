import React from "react";
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
} from "./styles";

const LoginPage = () => {

  return (
    <Container>
      <Header>
        <HeaderAdjust>
          <ImageLoad
            source={require("../../assets/LoginPageAssets/SignIn.png")}
          />
          <HeaderTitle>Faça seu Login</HeaderTitle>
        </HeaderAdjust>
        <Subtitle>Entre com suas informações de cadastro</Subtitle>
      </Header>
      <Form>
        <Form_Email_Container>
          <Form_Email_Text>E-mail</Form_Email_Text>
          <Form_Email_Input placeholder={"Digite seu e-mail"}/>
        </Form_Email_Container>
        <Form_Password_Container>
          <Form_Password_Text>Senha</Form_Password_Text>
          <Form_Password_Input placeholder={"Digite sua senha"}/>
        </Form_Password_Container>
      </Form>
    </Container>
  );
};

export default LoginPage;
