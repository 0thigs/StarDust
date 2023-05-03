import { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCode } from '../../hooks/useCode';
import { useAuth } from '../../hooks/useAuth';

import { CodeCard } from '../../components/CodeCard';
import { Button } from '../../components/Button';
import { Prompt } from '../../components/Prompt';
import { Modal } from '../../components/Modal';

import { ArrowLeft, Plus } from 'react-native-feather';
import * as C from './styles';
import theme from '../../global/styles/theme';

export function Codes() {
  const { loggedUser } = useAuth();
  const { codes, updateCode, deleteCode, fetchCodes } = useCode(null, loggedUser.id);
  const [isLoading, setIsLoading] = useState(true);
  const [isPromptVisible, setIsPromptVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const codeTitle = useRef('');
  const currentCodeId = useRef('');
  const navigation = useNavigation();

  function onPromptConfirm() {
    const id = currentCodeId.current;
    const title = codeTitle.current;
    if (!title) return;
    updateCode(id, { title });
    setIsPromptVisible(false);
    fetchCodes();
  }

  function onPromptCancel() {
    setIsPromptVisible(false);
  }

  function handleCreateCodePress() {
    navigation.navigate('Playground');
  }

  function handleDeleteButtonPress() {
    const id = currentCodeId.current;
    setIsModalVisible(false);
    deleteCode(id);
    fetchCodes();
  }

  function editCode(id) {
    currentCodeId.current = id;
    codeTitle.current = codes.find(code => code.id === id).title;
    setIsPromptVisible(true);
  }

  function handleCodeButtonPress(action, id) {
    switch (action) {
      case 'edit':
        editCode(id);
        break;
      case 'delete':
        currentCodeId.current = id;
        setIsModalVisible(true);
        break;
    }
  }

  useEffect(() => {
    fetchCodes();
    if (codes.length) setIsLoading(false);
  }, [codes]);

  return (
    <C.Container>
      <C.BackButton onPress={() => navigation.goBack()} activeOpacity={0.7}>
        <ArrowLeft color={theme.colors.green_500} width={48} />
      </C.BackButton>
      <C.Button onPress={handleCreateCodePress} activeOpacity={0.7}>
        <C.Icon>
          <Plus color={theme.colors.green_500} />
        </C.Icon>
        <C.Title>Criar novo código</C.Title>
      </C.Button>
      {!codes.length ? (
        <C.Message>Parece que você não tem nenhum código salvo 😢.</C.Message>
      ) : (
        <C.CodesList
          data={codes}
          keyExtractor={({ id }) => id}
          renderItem={({ item: { id, title } }) => (
            <CodeCard
              id={id}
              title={title}
              onPress={handleCodeButtonPress}
              navigation={navigation}
            />
          )}
        />
      )}

      <Prompt
        isVisible={isPromptVisible}
        title={'Renomear código'}
        onConfirm={onPromptConfirm}
        onCancel={onPromptCancel}
        value={codeTitle}
      />

      <Modal
        isVisible={isModalVisible}
        title={'Tem certeza que deseja deletar esse código?'}
        type={'crying'}
        body={null}
        footer={
          <>
            <Button
              title={'Deletar'}
              color={theme.colors.white}
              background={theme.colors.red_700}
              onPress={handleDeleteButtonPress}
            />
            <Button
              title={'Cancelar'}
              color={theme.colors.black}
              background={theme.colors.blue_300}
              onPress={() => setIsModalVisible(false)}
            />
          </>
        }
        playSong={false}
      />
    </C.Container>
  );
}
