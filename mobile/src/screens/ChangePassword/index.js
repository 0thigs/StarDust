import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ToastMenager, { Toast } from 'toastify-react-native';

import { Input } from '../../components/Input';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Button } from '../../components/Button';

import * as Icon from 'react-native-feather';
import * as yup from 'yup';
import * as C from './styles';
import theme from '../../global/styles/theme';
import { createURL } from 'expo-linking';
import { Linking } from 'react-native';

export const EmailSchema = yup.object({
  email: yup.string().required('E-mail não pode estar vazio!').email('E-mail inválido!'),
});

export function ChangePassword({ route }) {
  const { resetPassword, updateUserPassword } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigation = useNavigation();
  const url = createURL('change_password', {});
  //   console.log('URL => ' + url);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(EmailSchema) });

  async function handleSubmitEmail(data) {
    setIsLoading(true);
    const { email } = data;
    console.log(email);
    try {
      resetPassword(email);
      Toast.success('E-mail enviado com sucesso');
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleDeepLink({ url }) {
    console.log({ url });
    const accessToken = url.split('access_token=')[1].split('&')[0];
    const refreshtoken = url.split('refresh_token=')[1].split('&')[0];
    updateUserPassword('654321', accessToken, refreshtoken);
  }

  useEffect(() => {
    const subscription = Linking.addEventListener('url', handleDeepLink);
    // updateUserCredential('password', '654123')
    // console.log(route.params?.isEmailVerified);
  }, []);

  return (
    <C.Container>
      <C.Title>{!isSuccess && 'Insira seu e-mail cadastrado para recuperar a senha'}</C.Title>
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
      </C.Form>
      {isSuccess && (
        <C.SuccessMessage>
          Verifique a mensagem que enviamos para seu e-mail para recuperar a senha
        </C.SuccessMessage>
      )}
      <Button
        onPress={isSuccess ? () => navigation.goBack() : handleSubmit(handleSubmitEmail)}
        title={isSuccess ? 'Voltar' : 'Enviar'}
        isLoading={isLoading}
        isDisabled={isLoading}
        color={theme.colors.black}
        background={theme.colors.green_500}
      />
    </C.Container>
  );
}
