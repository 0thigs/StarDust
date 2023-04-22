import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { Linking, Alert } from 'react-native';
import { createURL } from 'expo-linking';
import { yupResolver } from '@hookform/resolvers/yup';
import { Toast } from 'toastify-react-native';

import { Input } from '../../components/Input';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Button } from '../../components/Button';
import { Prompt } from '../../components/Prompt';
import { Modal } from '../../components/Modal';

import * as Icon from 'react-native-feather';
import * as yup from 'yup';
import * as C from './styles';
import theme from '../../global/styles/theme';
const constrains = [
  '6 caracteres;',
  'uma letra maiúscula;',
  'uma letra minúscula;',
  'um número;',
  'um caractere especial como @, #, $, % etc.',
];

export const EmailSchema = yup.object({
  email: yup.string().required('E-mail não pode estar vazio!').email('E-mail inválido!'),
});

export function ChangePassword({ route }) {
  const { resetPassword, refreshSession, updateUserPassword } = useAuth();
  const [isPromptVisible, setIsPromptVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSendEmail, setHasSendEmail] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const navigation = useNavigation();
  const url = createURL('change_password');
  const newPassword = useRef('');
  const promptRef = useRef('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(EmailSchema) });

  function onPromptConfirm() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[A-Za-z\d\W\S]{6,}$/g;
    const matches = newPassword.current.match(passwordRegex);

    if (matches?.length) {
      try {
        updateUserPassword(newPassword.current);
        setIsPasswordChanged(true);
        setIsPromptVisible(false);
        return;
      } catch (error) {
        console.error(error);
      }
    }

    setIsModalVisible(true);
  }

  async function handleSubmitEmail({ email }) {
    setIsLoading(true);

    try {
      resetPassword(email);
      Toast.success('E-mail enviado com sucesso!');
      setHasSendEmail(true);
    } catch (error) {
      console.error(error);
      Toast.error('Terá que esperar 60 segundos para uma próxima solicitação');
    } finally {
      setIsLoading(false);
    }
  }

  function onPromptCancel() {
    Alert.alert('Mensagem', 'Por favor, escreva sua nova senha.');
  }

  async function handleDeepLink({ url }) {
    if (!url || url.includes('expired')) {
      setHasSendEmail(false);
      Toast.error('Link de recuperação de senha expirado');
      return;
    }
    const accessToken = url.split('access_token=')[1].split('&')[0];
    const refreshtoken = url.split('refresh_token=')[1].split('&')[0];
    if (!accessToken || !refreshtoken) {
      Toast.error('Erro ao tentar mudar a senha');
      return;
    }
    try {
      const newSession = await refreshSession(accessToken, refreshtoken);
      if (newSession.user.role === 'authenticated') setIsPromptVisible(true);
    } catch (error) {}
  }

  useEffect(() => {
    Linking.addEventListener('url', handleDeepLink);
  }, []);

  return (
    <C.Container>
      <C.Title>{!hasSendEmail && 'Insira seu e-mail cadastrado para recuperar a senha'}</C.Title>
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
      {hasSendEmail && (
        <C.SuccessMessage>
          {isPasswordChanged
            ? 'Sua senha foi redefinida com sucesso!'
            : 'Verifique a mensagem que enviamos para seu e-mail para recuperar a senha.'}
        </C.SuccessMessage>
      )}

      <Button
        onPress={
          isPasswordChanged
            ? () => navigation.goBack()
            : !hasSendEmail
            ? handleSubmit(handleSubmitEmail)
            : () => Toast.success('Verifique seu e-mail')
        }
        title={isPasswordChanged ? 'Voltar' : 'Enviar'}
        isLoading={isLoading}
        isDisabled={isLoading}
        color={theme.colors.black}
        background={theme.colors.green_500}
      />

      <Prompt
        isVisible={isPromptVisible}
        title={'Digite sua nova senha'}
        onConfirm={onPromptConfirm}
        onCancel={onPromptCancel}
        value={newPassword}
        promptRef={promptRef}
        isPassword={true}
      />

      <Modal
        isVisible={isModalVisible}
        title={'Sua senha deve conter pelo menos'}
        type={'asking'}
        body={
          <C.List>
            {constrains.map(constraint => (
              <C.Item key={constraint}>
                <Icon.Paperclip color={theme.colors.green_300} width={18} />
                <C.Constraint>{constraint}</C.Constraint>
              </C.Item>
            ))}
          </C.List>
        }
        footer={
          <Button
            title={'OK'}
            color={theme.colors.black}
            background={theme.colors.blue_300}
            onPress={() => setIsModalVisible(false)}
          />
        }
      />
    </C.Container>
  );
}
