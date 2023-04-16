import { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import theme from '../../global/styles/theme';
import * as yup from 'yup';
import * as Icon from 'react-native-feather';
import * as C from './styles';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export function Settings({ navigation: { goBack } }) {
  const { loggedUser, updateAuthUserEmail } = useAuth();
  const [currentData, setCurrentData] = useState({
    name: loggedUser.name,
    name: loggedUser.email,
  });
  const [isUpdatingPasswordForm, setIsUpdatingPasswordForm] = useState(false);

  const SettingsSchema = yup.object({
    email: yup.string().required('E-mail não pode estar vazio!').email('E-mail inválido!'),
    name: yup
      .string()
      .min(2, 'Nome de usuário deve ter pelo menos 2 dígitos!')
      .required('Nome de usuário não pode estar vazio!'),
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SettingsSchema) });

  function handleExitButton() {
    if (isUpdatingPasswordForm) {
      setIsUpdatingPasswordForm(false);
      return;
    }
    goBack();
  }

  async function handleSaveButton({ name, email }) {
    try {
      updateAuthUserEmail(email);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  }

  function handleBackEvent() {
    setIsUpdatingPasswordForm(false);
    return true;
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackEvent);

    setValue('name', loggedUser.name);
    setValue('email', loggedUser.email);

    return () => backHandler.remove();
  }, []);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderButton onPress={handleExitButton}>
          {!isUpdatingPasswordForm ? (
            <Icon.X color={theme.colors.green_500} width={28} height={28} />
          ) : (
            <Icon.ArrowLeft color={theme.colors.green_500} width={28} height={28} />
          )}
        </C.HeaderButton>
        <C.Title>Configurações de conta</C.Title>
        <C.HeaderButton onPress={handleSubmit(handleSaveButton)}>
          <C.Text>Salvar</C.Text>
        </C.HeaderButton>
      </C.Header>
      <C.Content>
        {/* <C.Avatar>
          <C.Image source={{ uri: loggedUser.avatar }} />
          <C.Text>Mudar avatar</C.Text>
        </C.Avatar> */}
        <C.Form>
          {!isUpdatingPasswordForm && (
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
                    userData={loggedUser.name}
                  />
                )}
              />
              {errors.name && <C.ErrorMessage>{errors.name?.message}</C.ErrorMessage>}
            </>
          )}

          {!isUpdatingPasswordForm && (
            <>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label={'E-mail'}
                    placeholder={'Digite seu e-mail'}
                    icon={
                      <Icon.Mail
                        color={errors.email ? theme.colors.red_700 : theme.colors.green_300}
                      />
                    }
                    type={'email-address'}
                    value={value}
                    onChangeText={onChange}
                    error={errors.email}
                    userData={loggedUser.email}
                  />
                )}
              />
              {errors.email && <C.ErrorMessage>{errors.email?.message}</C.ErrorMessage>}
            </>
          )}

          <C.ChangePasswordButton>
            <C.Text>Mudar senha</C.Text>
          </C.ChangePasswordButton>
        </C.Form>
        <Button
          title={'Sair da conta'}
          background={theme.colors.green_500}
          color={theme.colors.black}
        />
        <Button
          title={'Deletar conta'}
          background={theme.colors.red_700}
          color={theme.colors.white}
        />
      </C.Content>
    </C.Container>
  );
}
