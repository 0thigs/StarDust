import { useState } from 'react';
import { useEditor } from '../../hooks/useEditor';
import { useNavigation } from '@react-navigation/native';
import { useAnimatedStyle } from 'react-native-reanimated';
import { PopupMenu } from '../PopupMenu';
import { RangeInput } from '../RangeInput';
import * as C from './styles';
import * as Icon from 'react-native-feather';
import theme from '../../global/styles/theme';
const iconSize = 25;

export function ChallengeHeader({
  title,
  sliderRef,
  CurrentIndicatorPositionX,
  currentSlideIndex,
  setCurrentSlideIndex,
}) {
  const { isDarkMode, setIsDarkMode } = useEditor();
  const [isRangeInputVisible, setIsRangeInputVisible] = useState(false);
  const navigation = useNavigation();

  const popupMenuButtons = [
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
  ];

  //   const CurrentIndicatorPositionX = useSharedValue(indicatorPositionX);

  const IndicatorAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: CurrentIndicatorPositionX.value }],
    };
  });

  function handleBackButtonPress() {
    navigation.reset({
      routes: [{ name: 'DrawerRoutes' }],
    });
  }

  function handleNavButtonPress(index) {
    setCurrentSlideIndex(index);
    sliderRef.current.scrollToIndex({ index });
  }

  return (
    <C.Container>
      <C.Top>
        <C.HeaderButton onPress={handleBackButtonPress}>
          <Icon.ArrowLeft width={iconSize} height={iconSize} color={theme.colors.green_500} />
        </C.HeaderButton>
        <C.Title align={'right'}>{title}</C.Title>
        <PopupMenu buttons={popupMenuButtons} />
      </C.Top>
      <C.Navigation>
        <C.NavigationButton onPress={() => handleNavButtonPress(0)} activeOpacity={0.7}>
          <C.Title isActive={currentSlideIndex === 0}>Problema</C.Title>
        </C.NavigationButton>
        <C.NavigationButton onPress={() => handleNavButtonPress(1)} activeOpacity={0.7}>
          <C.Title isActive={currentSlideIndex === 1}>Código</C.Title>
        </C.NavigationButton>
        <C.NavigationButton onPress={() => handleNavButtonPress(2)} activeOpacity={0.7}>
          <C.Title isActive={currentSlideIndex === 2}>Resultado</C.Title>
        </C.NavigationButton>
      </C.Navigation>
      <C.Indicator style={IndicatorAnimatedStyle} />

      <RangeInput isVisible={isRangeInputVisible} setIsVisible={setIsRangeInputVisible} />
    </C.Container>
  );
}
