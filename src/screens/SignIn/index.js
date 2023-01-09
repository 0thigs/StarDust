import React from 'react';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import * as C from './styles';

import SignInIcon from '../../assets/SignInAssets/signin.svg';
import { Input } from '../../components/Input';
import theme from '../../global/styles/theme';

export function SignIn() {
  const navigation = useNavigation();

  return (
    <C.Container>
      <C.Header>
        <C.Heading>
          <SignInIcon />
          <C.HeaderTitle>Faça seu Login</C.HeaderTitle>
        </C.Heading>
        <C.HeaderSubtitle>Entre com suas informações de cadastro</C.HeaderSubtitle>
      </C.Header>
      <C.Form>
        <Input
          label={'E-mail'}
          placeholder={'Digite seu e-mail'}
          icon={<Icon.Mail color={theme.colors.green_300} />}
          type={'email'}
        />
        <Input
          label={'Senha'}
          placeholder={'Digite sua senha'}
          icon={<Icon.Lock color={theme.colors.green_300} />}
          type={'password'}
        />
      </C.Form>
      <C.SubmitButton>
        <C.SubmitButtonText>Entrar</C.SubmitButtonText>
      </C.SubmitButton>
      <C.AccountButtons>
        <C.AccountButton>
          <C.AccountButtonText>Esqueci minha senha</C.AccountButtonText>
        </C.AccountButton>
        <C.AccountButton>
          <C.AccountButtonText>Criar minha conta</C.AccountButtonText>
        </C.AccountButton>
      </C.AccountButtons>
    </C.Container>
  );
}
