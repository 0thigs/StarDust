import { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { useConfig } from '../../hooks/useConfig';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import theme from '../../global/styles/theme';
import * as yup from 'yup';
import * as Icon from 'react-native-feather';
import * as C from './styles';
import ToggleSwitch from 'toggle-switch-react-native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TimePicker } from '../../components/TimePicker';

export function Settings({ navigation: { goBack } }) {
  const { loggedUser, updateAuthUserEmail } = useAuth();
  const { config, updateConfig } = useConfig();
  const [currentData, setCurrentData] = useState({
    name: loggedUser.name,
    email: loggedUser.email,
  });
  const [isUpdatingPasswordForm, setIsUpdatingPasswordForm] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

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
      console.log(email);
      updateAuthUserEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  function handleBackEvent() {
    setIsUpdatingPasswordForm(false);
    return true;
  }

  function handleToggle(configName, value) {
    updateConfig(configName, !value);
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackEvent);

    setValue('name', currentData.name);
    setValue('email', currentData.email);

    return () => backHandler.remove();
  }, []);

  return (
    <C.Container>
      <C.Header>
        <C.Button onPress={handleExitButton}>
          {!isUpdatingPasswordForm ? (
            <Icon.X color={theme.colors.green_500} width={28} height={28} />
          ) : (
            <Icon.ArrowLeft color={theme.colors.green_500} width={28} height={28} />
          )}
        </C.Button>
        <C.Title>Configurações de conta</C.Title>
        <C.Button onPress={handleSubmit(handleSaveButton)}>
          <C.Text>Salvar</C.Text>
        </C.Button>
      </C.Header>
      <C.Content>
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

          <C.ToggleInput>
            <C.Label>Efeitos sonoros</C.Label>
            <ToggleSwitch
              isOn={config.canPlaySound}
              onColor={theme.colors.green_700}
              offColor={theme.colors.green_900}
              size="medium"
              onToggle={isOn => handleToggle('canPlaySound', !isOn)}
            />
          </C.ToggleInput>

          <C.ToggleInput>
            <C.Label>Noticação</C.Label>
            <ToggleSwitch
              isOn={config.canPushNotification}
              onColor={theme.colors.green_700}
              offColor={theme.colors.green_900}
              size="medium"
              onToggle={isOn => handleToggle('canPushNotification', !isOn)}
            />
          </C.ToggleInput>
          <TimePicker isVisible={isTimePickerVisible} setIsVisible={setIsTimePickerVisible} />

          <C.ToggleInput>
            <C.Label>Noticação</C.Label>
            <C.Button onPress={() => setIsTimePickerVisible(true)}>
              <C.Time>{loggedUser.study_time}</C.Time>
            </C.Button>
          </C.ToggleInput>
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
