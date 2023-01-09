import * as C from './styles';

import { Input } from '../../components/Input';

import { useNavigation } from '@react-navigation/native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import SignInIcon from '../../assets/SignInAssets/signin.svg';
import theme from '../../global/styles/theme';
import * as Icon from 'react-native-feather';
import { Keyboard } from 'react-native';
import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';

const schema = yup.object({
  username: yup
    .string()
    .min(2, 'Nome de usuário deve ter pelo menos 2 dígitos!')
    .required('Nome de usuário não pode estar vazio!'),
  email: yup.string().required('E-mail não pode estar vazio!').email('E-mail inválido!'),
  password: yup
    .string()
    .min(6, 'senha deve ter pelo menos 6 dígitos!')
    .required('Senha não pode estar vazia!'),
  passwordConfirm: yup
    .string()
    .required('Senha não pode estar vazia!')
    .oneOf([yup.ref('password'), null], 'Senha de confirmação não confere'),
});

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigation = useNavigation();

  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [isShowHeader, setIsShowHeader] = useState(true);

  function handleSignUpForm() {
    setIsSignUpForm(true);
  }

  function handleSignInForm() {
    setIsSignUpForm(false);
  }

  function handleSignIn(data) {
    console.log(data);
  }

  function hideHeader() {
    setIsShowHeader(true);
  }

  function showHeader() {
    setIsShowHeader(false);
  }

  useEffect(() => {
    KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', hideHeader);
    KeyboardDidShowListener = Keyboard.addListener('keyboardDidHide', showHeader);
  }, []);

  return (
    <C.Container onPress={Keyboard.dismiss}>
      <C.Content bevavior={'position'} enabled>
        <C.Header>
          <C.Heading>
            <SignInIcon />
            <C.HeaderTitle>Faça seu {isSignUpForm ? 'cadastro' : 'login'}</C.HeaderTitle>
          </C.Heading>
          <C.HeaderSubtitle>
            {isSignUpForm
              ? 'Insira suas credenciais para cadastrar'
              : 'Entre com suas informações de cadastro'}
          </C.HeaderSubtitle>
        </C.Header>
        <C.Form>
          {isSignUpForm && (
            <>
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label={'Nome de usuário'}
                    placeholder={'Digite seu nome de usuário'}
                    icon={
                      <Icon.User
                        color={errors.username ? theme.colors.red_700 : theme.colors.green_300}
                      />
                    }
                    type={'text'}
                    value={value}
                    onChangeText={onChange}
                    error={errors.username}
                  />
                )}
              />
              {errors.username && <C.ErrorMessage>{errors.username?.message}</C.ErrorMessage>}
            </>
          )}

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                label={'E-mail'}
                placeholder={'Digite seu e-mail'}
                icon={
                  <Icon.Mail color={errors.email ? theme.colors.red_700 : theme.colors.green_300} />
                }
                type={'email-address'}
                value={value}
                onChangeText={onChange}
                error={errors.email}
              />
            )}
          />
          {errors.email && <C.ErrorMessage>{errors.email?.message}</C.ErrorMessage>}

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                label={'Senha'}
                placeholder={'Digite sua senha'}
                icon={
                  <Icon.Lock
                    color={errors.password ? theme.colors.red_700 : theme.colors.green_300}
                  />
                }
                type={'password'}
                onChangeText={onChange}
                error={errors.password}
              />
            )}
          />
          {errors.password && <C.ErrorMessage>{errors.password?.message}</C.ErrorMessage>}

          {isSignUpForm && (
            <>
              <Controller
                control={control}
                name="passwordConfirm"
                render={({ field: { onChange } }) => (
                  <Input
                    label={'Confirmar senha'}
                    placeholder={'Digite sua senha novamente'}
                    icon={
                      <Icon.Lock
                        color={
                          errors.passwordConfirm ? theme.colors.red_700 : theme.colors.green_300
                        }
                      />
                    }
                    type={'password'}
                    onChangeText={onChange}
                    error={errors.passwordConfirm}
                  />
                )}
              />
              {errors.passwordConfirm && (
                <C.ErrorMessage>{errors.passwordConfirm?.message}</C.ErrorMessage>
              )}
            </>
          )}
        </C.Form>
        <Button onPress={handleSubmit(handleSignIn)} title={'Entrar'} />

        {isSignUpForm ? (
          <C.AccountButtons>
            <C.AccountButton onPress={handleSignInForm}>
              <C.AccountButtonText>Já tenho uma conta</C.AccountButtonText>
            </C.AccountButton>
          </C.AccountButtons>
        ) : (
          <C.AccountButtons>
            <C.AccountButton>
              <C.AccountButtonText>Esqueci minha senha</C.AccountButtonText>
            </C.AccountButton>
            <C.AccountButton onPress={handleSignUpForm}>
              <C.AccountButtonText>Criar minha conta</C.AccountButtonText>
            </C.AccountButton>
          </C.AccountButtons>
        )}
      </C.Content>
    </C.Container>
  );
}
