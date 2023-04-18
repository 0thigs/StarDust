import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { Keyboard } from 'react-native';
import * as C from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ErrorMessage } from '../../components/ErrorMessage';

import SignInIcon from '../../assets/SignInAssets/signin.svg';
import theme from '../../global/styles/theme';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as Icon from 'react-native-feather';

import ToastMenager, { Toast } from 'toastify-react-native';

const SingnInSchema = yup.object({
  email: yup.string().required('E-mail não pode estar vazio!').email('E-mail inválido!'),
  password: yup
    .string()
    .min(6, 'senha deve ter pelo menos 6 dígitos!')
    .required('Senha não pode estar vazia!'),
});

export const SingnUpSchema = yup.object({
  name: yup
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
    resetField,
    formState: { errors },
  } = useForm({ resolver: yupResolver(isSignUpForm ? SingnUpSchema : SingnInSchema) });

  const navigation = useNavigation();

  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [isToShowHeader, setIsToShowHeader] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { signUp, signIn } = useAuth();

  function handleSignUpForm() {
    setIsSignUpForm(true);
  }

  function handleSignInForm() {
    setIsSignUpForm(false);
  }

  function hideHeader() {
    setIsToShowHeader(false);
  }

  function showHeader() {
    setIsToShowHeader(true);
  }

  async function HandleSignIn(data) {
    setIsLoading(true);
    try {
      await signIn(data);

      navigation.reset({
        routes: [{ name: 'DrawerRoutes' }],
      });
    } catch (error) {
      Toast.error('Usuário não encontrado');
    } finally {
      setIsLoading(false);
    }
  }

  async function HandleSignUp(data) {
    setIsLoading(true);
    try {
      await signUp(data);
      const config = [
        {
          name: 'canPushNotification',
          value: true,
        },
        {
          name: 'canPlaySound',
          value: true,
        },
      ];

      navigation.reset({
        routes: [{ name: 'Intro' }],
      });
    } catch (error) {
      console.log(error);
      Toast.error('Usuário já cadastrado');
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', hideHeader);
    Keyboard.addListener('keyboardDidHide', showHeader);
  }, []);

  useEffect(() => {
    resetField('name');
    resetField('email');
    resetField('password');
    resetField('passwordConfirm');
  }, [isSignUpForm]);

  return (
    <C.Container onPress={Keyboard.dismiss}>
      <C.Content bevavior={'position'}>
        <ToastMenager
          animationInTiming={700}
          animationOutTiming={1000}
          animationStyle={'rightInOut'}
          width={320}
          position="top"
        />
        {isToShowHeader ? (
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
        ) : (
          <C.Top />
        )}
        <C.Form>
          {isSignUpForm && (
            <>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label={'Nome de usuário'}
                    placeholder={'Digite seu nome de usuário'}
                    icon={
                      <Icon.User
                        color={errors.name ? theme.colors.red_700 : theme.colors.green_300}
                      />
                    }
                    type={'text'}
                    value={value}
                    onChangeText={onChange}
                    error={errors.name}
                  />
                )}
              />
              {errors.name && <ErrorMessage message={errors.name?.message} />}
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
          {errors.email && <ErrorMessage message={errors.email?.message} />}

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                label={'Senha'}
                placeholder={'Digite sua senha'}
                icon={
                  <Icon.Lock
                    color={errors.password ? theme.colors.red_700 : theme.colors.green_300}
                  />
                }
                value={value}
                type={'password'}
                onChangeText={onChange}
                error={errors.password}
              />
            )}
          />
          {errors.password && <ErrorMessage message={errors.password?.message} />}

          {isSignUpForm && (
            <>
              <Controller
                control={control}
                name="passwordConfirm"
                render={({ field: { onChange, value } }) => (
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
                    value={value}
                    type={'password'}
                    onChangeText={onChange}
                    error={errors.passwordConfirm}
                  />
                )}
              />
              {errors.passwordConfirm && <ErrorMessage message={errors.passwordConfirm?.message} />}
            </>
          )}
        </C.Form>
        <Button
          onPress={isSignUpForm ? handleSubmit(HandleSignUp) : handleSubmit(HandleSignIn)}
          title={isSignUpForm ? 'Cadastrar' : 'Entrar'}
          isLoading={isLoading}
          isDisabled={isLoading}
          color={theme.colors.black}
          background={theme.colors.green_500}
        />

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
