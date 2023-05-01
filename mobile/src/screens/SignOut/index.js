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

import { Toast } from 'toastify-react-native';
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[A-Za-z\d\W\S]{6,}$/g;

const SingnUpSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Nome de usuário deve ter pelo menos 2 dígitos!')
    .required('Nome de usuário não pode estar vazio!'),
  email: yup.string().required('E-mail não pode estar vazio!').email('E-mail inválido!'),
  password: yup
    .string()
    .min(8, 'Senha deve ter pelo menos 6 dígitos!')
    .required('Senha não pode estar vazia!')
    .matches(
      passwordRegex,
      'Senha deve conter pelo menos uma letra minúscula, uma maiúscula, um dígito e um caractere especial.'
    ),
  passwordConfirm: yup
    .string()
    .required('Senha não pode estar vazia!')
    .oneOf([yup.ref('password'), null], 'Senha de confirmação não confere.'),
});

export function SignOut() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SingnUpSchema) });

  const navigation = useNavigation();

  const [isToShowHeader, setIsToShowHeader] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { signUp } = useAuth();

  function hideHeader() {
    setIsToShowHeader(false);
  }

  function showHeader() {
    setIsToShowHeader(true);
  }

  async function HandleSignUp(data) {
    setIsLoading(true);
    try {
      await signUp(data);

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

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  return (
    <C.Container onPress={Keyboard.dismiss}>
      <C.Content bevavior={'position'}>
        {isToShowHeader ? (
          <C.Header>
            <C.Heading>
              <SignInIcon />
              <C.HeaderTitle>Faça seu cadastro</C.HeaderTitle>
            </C.Heading>
            <C.HeaderSubtitle>Entre com suas informações de cadastro</C.HeaderSubtitle>
          </C.Header>
        ) : (
          <C.Top />
        )}
        <C.Form>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                label={'Nome de usuário'}
                placeholder={'Digite seu nome de usuário'}
                icon={
                  <Icon.User color={errors.name ? theme.colors.red_700 : theme.colors.green_300} />
                }
                type={'text'}
                value={value}
                onChangeText={onChange}
                error={errors.name}
              />
            )}
          />
          {errors.name && <ErrorMessage message={errors.name?.message} />}

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

          <Controller
            control={control}
            name="passwordConfirm"
            render={({ field: { onChange, value } }) => (
              <Input
                label={'Confirmar senha'}
                placeholder={'Digite sua senha novamente'}
                icon={
                  <Icon.Lock
                    color={errors.passwordConfirm ? theme.colors.red_700 : theme.colors.green_300}
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
        </C.Form>
        <Button
          onPress={handleSubmit(HandleSignUp)}
          title={'Cadastrar'}
          isLoading={isLoading}
          isDisabled={isLoading}
          color={theme.colors.black}
          background={theme.colors.green_500}
        />

        <C.AccountButtons>
          <C.AccountButton onPress={() => navigation.navigate('SignIn')}>
            <C.AccountButtonText>Já tenho uma conta</C.AccountButtonText>
          </C.AccountButton>
        </C.AccountButtons>
      </C.Content>
    </C.Container>
  );
}
