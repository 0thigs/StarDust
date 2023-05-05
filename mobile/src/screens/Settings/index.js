import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';
import { useConfig } from '../../hooks/useConfig';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import theme from '../../global/styles/theme';
import * as yup from 'yup';
import * as Icon from 'react-native-feather';
import * as C from './styles';
import ToggleSwitch from 'toggle-switch-react-native';

import { Toast } from 'toastify-react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { TimePicker } from '../../components/TimePicker';
import { Modal } from '../../components/Modal';
import { Alert, Keyboard, Linking, View } from 'react-native';
import { Loading } from '../../components/Loading';

export function Settings({ navigation: { goBack } }) {
  const { loggedUser, updateLoggedUser, updateUserEmail, signOut, deleteLoggedUser } = useAuth();
  const { config, updateConfig } = useConfig();
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAskingModalVisible, setIsAskingModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentAction, setCurrentAction] = useState('');
  const navigation = useNavigation();

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
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SettingsSchema) });

  function handleExitButton() {
    const { name, email } = getValues();
    if (loggedUser.name !== name || loggedUser.email !== email) {
      setIsAskingModalVisible(true);
      return;
    }
    goBack();
  }

  function handleUpdateNameError(error) {
    console.log(error.message);
    if (error.message === 'duplicate key value violates unique constraint "users_name_key"');
    Toast.error('Nome de usuário já em uso');
  }

  function handleUpdateEmailError(error) {
    console.log(error.message);
    if (error.message === 'duplicate key value violates unique constraint "users_email_key"');
    Toast.error('E-mail já em uso');
  }

  async function handleSaveButton({ name, email }) {
    setIsLoading(true);
    try {
      if (name !== loggedUser.name) {
        const result = await updateLoggedUser('name', name);
        if (result instanceof Error) {
          handleUpdateNameError(result);
          return;
        }
      }

      if (email !== loggedUser.email) {
        const result = await updateUserEmail(email);
        if (result instanceof Error) {
          handleUpdateEmailError(result);
          return;
        }
      }

      Toast.success('Dados atualizados com sucesso');
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleToggle(configName, value) {
    updateConfig(configName, !value);
  }

  async function handleSignOut() {
    try {
      await signOut();

      navigation.reset({
        routes: [{ name: 'SignIn' }],
      });
    } catch (error) {
      console.log(error);
      Toast.error('Falha ao tentar sair da conta');
    }
  }

  async function handleDeepLink() {
    Toast.error('Falha ao tentar sair da conta');
  }

  async function handleDeleteAccount() {
    try {
      await signOut();
      await deleteLoggedUser(loggedUser.id);

      navigation.reset({
        routes: [{ name: 'SignIn' }],
      });
    } catch (error) {
      console.error(error);
      Toast.error('Falha ao tentar deletar sua conta');
    } finally {
      setIsModalVisible(false);
    }
  }

  function handleAccountButtonPress(action) {
    setCurrentAction(action);
    setIsModalVisible(true);
  }

  useEffect(() => {
    setValue('name', loggedUser.name);
    setValue('email', loggedUser.email);

    Linking.addEventListener('url', handleDeepLink);
  }, []);

  return (
    <C.Container>
      <C.Header>
        <C.Button onPress={handleExitButton}>
          <Icon.ArrowLeft color={theme.colors.green_500} width={28} height={28} />
        </C.Button>
        <C.Title>Configurações de conta</C.Title>
        <C.Button onPress={handleSubmit(handleSaveButton)}>
          <C.Text>Salvar</C.Text>
        </C.Button>
      </C.Header>
      <Modal
        isVisible={isAskingModalVisible}
        type={'asking'}
        playSong={true}
        title={`Deseja mesmo sair sem salvar?`}
        body={null}
        footer={
          <>
            <Button
              title={'Sair'}
              color={theme.colors.white}
              background={theme.colors.red_700}
              onPress={() => goBack()}
            />
            <Button
              title={'Cancelar'}
              color={theme.colors.black}
              background={theme.colors.green_500}
              onPress={() => setIsAskingModalVisible(false)}
            />
          </>
        }
      />

      <C.Content onPress={Keyboard.dismiss}>
        <View style={{ padding: 24 }}>
          <C.Form>
            <C.InputContainer>
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
              {isLoading && (
                <C.Loader>
                  <Loading />
                </C.Loader>
              )}
              {errors.name && <C.ErrorMessage>{errors.name?.message}</C.ErrorMessage>}
            </C.InputContainer>

            <C.InputContainer>
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
              {isLoading && (
                <C.Loader>
                  <Loading />
                </C.Loader>
              )}
              {errors.email && <C.ErrorMessage>{errors.email?.message}</C.ErrorMessage>}
            </C.InputContainer>

            <C.ChangePasswordButton
              onPress={() => navigation.navigate('change_password', { prevScreen: 'Settings' })}
            >
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
            onPress={() => handleAccountButtonPress('signout')}
          />
          <Button
            title={'Deletar conta'}
            background={theme.colors.red_700}
            color={theme.colors.white}
            onPress={() => handleAccountButtonPress('delete')}
          />
        </View>
      </C.Content>

      <Modal
        isVisible={isModalVisible}
        type={'crying'}
        playSong={false}
        title={`Calma aí! Deseja mesmo ${
          currentAction === 'delete' ? 'DELETAR A SUA CONTA ' : 'SAIR DA SUA CONTA '
        }😢?`}
        body={null}
        footer={
          <>
            <Button
              title={currentAction === 'delete' ? 'Deletar' : 'Sair'}
              color={theme.colors.white}
              background={theme.colors.red_700}
              onPress={currentAction === 'delete' ? handleDeleteAccount : handleSignOut}
            />
            <Button
              title={'Cancelar'}
              color={theme.colors.black}
              background={theme.colors.green_500}
              onPress={() => setIsModalVisible(false)}
            />
          </>
        }
      />
    </C.Container>
  );
}
