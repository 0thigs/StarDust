import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useCode } from '../../hooks/useCode';
import { useEditor } from '../../hooks/useEditor';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Toast } from 'toastify-react-native';
import { ArrowLeft, MoreVertical } from 'react-native-feather';
import { RangeInput } from '../RangeInput';
import { Prompt } from '../Prompt';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { PopoverMenu } from '../PopoverMenu';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import * as Clipboard from 'expo-clipboard';
import * as C from './styles';
import theme from '../../global/styles/theme';
const iconColor = theme.colors.green_500;

export function PlaygroundHeader({
  title,
  code,
  codeId,
  initialCode,
  setInitialCode,
  setCodeId,
  setCodeTitle,
}) {
  const { loggedUser } = useAuth();
  const { addCode, updateCode, deleteCode } = useCode();
  const { isDarkMode, setIsDarkMode } = useEditor();
  const [popoverMenuButtons, setPopoverMenuButtons] = useState([]);
  const [isRangeInputVisible, setIsRangeInputVisible] = useState(false);
  const [isPromptVisible, setIsPromptVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  const codeTitle = useRef('');
  const popoverMenuRef = useRef(null);

  async function copyCodeToClipboard() {
    try {
      await Clipboard.setStringAsync(code.current);
      Toast.success('Código copiado')
    } catch (error) {
      console.error(error);
      Toast.error('Não foi possível copiar o código');
    }
  }

  async function onPromptConfirm() {
    popoverMenuRef.current.closePopover();

    try {
      setInitialCode(code.current);

      if (codeId) {
        await updateCode(codeId, { code: code.current });
        return;
      }
      const id = uuidv4();
      await addCode(id, codeTitle.current, code.current, loggedUser.id);
      setCodeTitle(codeTitle.current);
      setCodeId(id);
      setIsPromptVisible(false);
    } catch (error) {
      console.error(error);
    }
  }

  function onPromptCancel() {
    setIsPromptVisible(false);
    closePopover();
  }

  function handleDeleteButtonPress() {
    deleteCode(codeId);
    setIsModalVisible(false);
    navigation.goBack();
  }

  function handleBackButtonPress() {
    if (codeId && initialCode !== code.current) {
      Alert.alert('Alterações não salvas', 'Tem certeza que deseja sair sem salvar seu código?', [
        {
          text: 'Sim',
          onPress: () => navigation.goBack(),
        },
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
        },
      ]);
      return;
    }
    navigation.goBack();
  }

  useEffect(() => {
    const popoverMenuButtons = [
      {
        title: 'Salvar código',
        isToggle: false,
        value: null,
        action: () => (codeId ? onPromptConfirm() : setIsPromptVisible(true)),
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
        title: 'Copiar código',
        isToggle: false,
        value: null,
        action: copyCodeToClipboard,
      },
    ];

    if (codeId) {
      const deleteButton = {
        title: 'Deletar',
        isToggle: false,
        value: null,
        action: () => setIsModalVisible(true),
      };
      popoverMenuButtons.push(deleteButton);
    }

    setPopoverMenuButtons(popoverMenuButtons);
  }, [codeId]);

  return (
    <C.Container>
      <C.HeaderButton activeOpacity={0.7} onPress={handleBackButtonPress}>
        <ArrowLeft color={iconColor} />
      </C.HeaderButton>

      <C.Title>{title}</C.Title>

      <PopoverMenu
        ref={popoverMenuRef}
        buttons={popoverMenuButtons}
        icon={<MoreVertical width={25} height={25} color={theme.colors.green_500} />}
      />

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
