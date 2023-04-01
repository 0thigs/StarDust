import { useEditor } from '../../hooks/useEditor';
import { ArrowLeft, Share2 } from 'react-native-feather';
import { useState } from 'react';
import { PopupMenu } from '../PopupMenu';
import * as C from './styles';
import theme from '../../global/styles/theme';
const iconColor = theme.colors.green_500;

export function PlaygroundHeader({ title }) {
  const { isDarkMode, setIsDarkMode } = useEditor();
  const [isRangeInputVisible, setIsRangeInputVisible] = useState(false);

  const popupMenuButtons = [
    {
      title: 'Salvar',
      isToggle: false,
      value: isDarkMode,
      action: () => setIsDarkMode(!isDarkMode),
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
      action: () => setIsRangeInputVisible(true),
    },
  ];

  return (
    <C.Container>
      <C.HeaderButton activeOpacity={0.7}>
        <ArrowLeft color={iconColor} />
      </C.HeaderButton>

      <C.Title>{title}</C.Title>

      <C.HeaderButton activeOpacity={0.7}>
        <Share2 color={iconColor} />
      </C.HeaderButton>

      <PopupMenu buttons={popupMenuButtons} />
    </C.Container>
  );
}
