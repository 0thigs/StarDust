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

const SingnInSchema = yup.object({
  email: yup.string().required('E-mail não pode estar vazio!').email('E-mail inválido!'),
  password: yup
    .string()
    .min(8, 'Senha deve ter pelo menos 6 dígitos!')
    .required('Senha não pode estar vazia!')
    .matches(
      passwordRegex,
      'Senha deve conter pelo menos uma letra minúscula, uma maiúscula, um dígito e um caractere especial.'
    ),
});

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SingnInSchema) });
  const { signIn } = useAuth();
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [isToShowHeader, setIsToShowHeader] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

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
              <C.HeaderTitle>Faça seu login</C.HeaderTitle>
            </C.Heading>
            <C.HeaderSubtitle>Entre com suas informações de cadastro</C.HeaderSubtitle>
          </C.Header>
        ) : (
          <C.Top />
        )}
        <C.Form>
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
        </C.Form>
        <Button
          onPress={handleSubmit(HandleSignIn)}
          title={'Entrar'}
          isLoading={isLoading}
          isDisabled={isLoading}
          color={theme.colors.black}
          background={theme.colors.green_500}
        />

        <C.AccountButtons>
          <C.AccountButton
            onPress={() => navigation.navigate('change_password', { prevScreen: 'Settings' })}
          >
            <C.AccountButtonText>Esqueci minha senha</C.AccountButtonText>
          </C.AccountButton>
          <C.AccountButton onPress={() => navigation.navigate('SignOut')}>
            <C.AccountButtonText>Criar minha conta</C.AccountButtonText>
          </C.AccountButton>
        </C.AccountButtons>
      </C.Content>
    </C.Container>
  );
}
