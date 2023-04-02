import { useState, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useCode } from '../../hooks/useCode';
import { useEditor } from '../../hooks/useEditor';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Share2 } from 'react-native-feather';
import { RangeInput } from '../RangeInput';
import { Prompt } from '../Prompt';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { PopoverMenu } from '../PopoverMenu';
import { v4 as uuidv4 } from 'uuid';
import * as C from './styles';
import theme from '../../global/styles/theme';
import { usePopover } from 'react-native-modal-popover';
const iconColor = theme.colors.green_500;

export function PlaygroundHeader({ title, code, codeId, setCodeTitle }) {
  const { loggedUser } = useAuth();
  const { addCode, updateCode, deleteCode } = useCode();
  const { isDarkMode, setIsDarkMode } = useEditor();
  const { closePopover } = usePopover();
  const [isRangeInputVisible, setIsRangeInputVisible] = useState(false);
  const [isPromptVisible, setIsPromptVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  const codeTitle = useRef('');

  function onPromptConfirm() {
    if (codeId.current) {
      updateCode(codeId.current, { code });
      return;
    }
    const id = uuidv4();
    addCode(id, codeTitle.current, code.current, loggedUser.id);
    setIsPromptVisible(false);
    setCodeTitle(codeTitle.current);
    codeId.current = id;
  }

  function onPromptCancel() {
    console.log(code);
    setIsPromptVisible(false);
    closePopover();
  }

  function handleDeleteButtonPress() {
    deleteCode(codeId.current);
    setIsModalVisible(false);
    navigation.goBack();
  }

  function handleBackButtonPress() {
    navigation.goBack();
  }

  const popoverMenuButtons = [
    {
      title: 'Salvar código',
      isToggle: false,
      value: isDarkMode,
      action: () => (codeId.current ? onPromptConfirm() : setIsPromptVisible(true)),
    },
    {
      title: 'Dark Mode',
      isToggle: true,
      value: isDarkMode,
      action: () => setIsDarkMode(!isDarkMode),
    },
    {
      title: 'Font Size',
      isToggle: false,
      value: null,
      action: () => setIsRangeInputVisible(true),
    },
    {
      title: 'Deletar',
      isToggle: false,
      value: null,
      action: () => setIsModalVisible(true),
    },
  ];

  return (
    <C.Container>
      <C.HeaderButton activeOpacity={0.7} onPress={handleBackButtonPress}>
        <ArrowLeft color={iconColor} />
      </C.HeaderButton>

      <C.Title>{title}</C.Title>

      <C.HeaderButton activeOpacity={0.7}>
        <Share2 color={iconColor} />
      </C.HeaderButton>

      <PopoverMenu  buttons={popoverMenuButtons}  />

      <RangeInput isVisible={isRangeInputVisible} setIsVisible={setIsRangeInputVisible} />

      <Prompt
        isVisible={isPromptVisible}
        title={'Salve o código com um nome'}
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