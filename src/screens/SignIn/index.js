import * as C from './styles';

import { Input } from '../../components/Input';

import { useNavigation } from '@react-navigation/native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import SignInIcon from '../../assets/SignInAssets/signin.svg';
import theme from '../../global/styles/theme';
import * as Icon from 'react-native-feather';

const schema = yup.object({
  email: yup.string().required('E-mail não pode estar vazio!'),
  password: yup.string().required('Senha não pode estar vazia!'),
});

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigation = useNavigation();

  function handleSignIn(data) {
    console.log(data);
  }

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
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              label={'E-mail'}
              placeholder={'Digite seu e-mail'}
              icon={<Icon.Mail color={theme.colors.green_300} />}
              type={'email'}
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
              icon={<Icon.Lock color={theme.colors.green_300} />}
              type={'password'}
              onChangeText={onChange}
              error={errors.password}
            />
          )}
        />
        {errors.password && <C.ErrorMessage>{errors.password?.message}</C.ErrorMessage>}
      </C.Form>
      <C.SubmitButton onPress={handleSubmit(handleSignIn)}>
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
