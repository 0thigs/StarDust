import { useState } from 'react';
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
import { supabase } from '../../services/supabase';

export const EmailSchema = yup.object({
  email: yup.string().required('E-mail não pode estar vazio!').email('E-mail inválido!'),
});

export function ForgotPassword({ navigation: { goBack } }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) {
        throw new Error(error.message);
      }

      Toast.success('E-mail enviado com sucesso');
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <C.Container>
      <ToastMenager
        animationInTiming={700}
        animationOutTiming={1000}
        animationStyle={'rightInOut'}
        width={320}
        position="top"
      />
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
        onPress={isSuccess ? () => goBack() : handleSubmit(handleSubmitEmail)}
        title={isSuccess ? 'Voltar' : 'Enviar'}
        isLoading={isLoading}
        isDisabled={isLoading}
        color={theme.colors.black}
        background={theme.colors.green_500}
      />
    </C.Container>
  );
}
