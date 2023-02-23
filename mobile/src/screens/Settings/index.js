import { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

import * as Icon from 'react-native-feather';
import theme from '../../global/styles/theme';
import * as C from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { SingnUpSchema as SettingsSchema } from '../SignIn';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export function Settings({ navigation: { goBack } }) {
  const { loggedUser, setUser } = useAuth();
  const [isUpdatingPasswordForm, setIsUpdatingPasswordForm] = useState(false)

  const {
    control,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SettingsSchema) });

  function handleExitButton() {
    if (isUpdatingPasswordForm) {
      setIsUpdatingPasswordForm(false);
      return;
    }
    goBack()
  }

  function handleBackEvent() {
    setIsUpdatingPasswordForm(false);
    return true;
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackEvent);

    setValue("name", loggedUser.name);
    setValue("email", loggedUser.email);
    setValue("password", "fakePassword");

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
        <C.Title>Configurações</C.Title>
        <C.HeaderButton>
          <C.Text>Salvar</C.Text>
        </C.HeaderButton>
      </C.Header>
      <C.Content>
        <C.Avatar>
          <C.Image source={{ uri: loggedUser.avatar }} />
          <C.Text>Mudar avatar</C.Text>
        </C.Avatar>
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
                userData={'fakePassword'}
                isUpdatingPasswordForm={isUpdatingPasswordForm}
                setIsUpdatingPasswordForm={setIsUpdatingPasswordForm}
              />
            )}
          />
          {errors.password && <C.ErrorMessage>{errors.password?.message}</C.ErrorMessage>}

          {isUpdatingPasswordForm && (
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
                    setIsUpdatingPasswordForm={setIsUpdatingPasswordForm}
                  />
                )}
              />
              {errors.passwordConfirm && (
                <C.ErrorMessage>{errors.passwordConfirm?.message}</C.ErrorMessage>
              )}
            </>
          )}
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
