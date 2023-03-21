import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import * as C from './styles';
import * as Icon from 'react-native-feather';
import theme from '../../global/styles/theme';
import { useEditor } from '../../hooks/useEditor';
import { PopupMenu } from '../PopupMenu';
import { RangeInput } from '../RangeInput';
import Modal from "react-native-modal";
const iconSize = 25;

export function ChallengeHeader({ title, indicatorPositionX, slideWidth, sliderRef }) {
  const { isDarkMode, setIsDarkMode } = useEditor();
  const [isRangeInputVisible, setIsRangeInputVisible] = useState(true);
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

  const CurrentIndicatorPositionX = useSharedValue(indicatorPositionX);

  const IndicatorAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(CurrentIndicatorPositionX.value, { duration: 350 }) }],
    };
  });

  function handleBackButtonPress() {
    navigation.reset({
      routes: [{ name: 'DrawerRoutes' }],
    });
  }

  function handleNavButtonPress(index) {
    sliderRef.current.scrollToIndex({ index });
  }

  useEffect(() => {
    console.log('render');
    CurrentIndicatorPositionX.value = indicatorPositionX / 3;
  }, [indicatorPositionX]);

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
          <C.Title isActive={0 === indicatorPositionX}>Problema</C.Title>
        </C.NavigationButton>
        <C.NavigationButton onPress={() => handleNavButtonPress(1)} activeOpacity={0.7}>
          <C.Title isActive={slideWidth === indicatorPositionX}>Código</C.Title>
        </C.NavigationButton>
        <C.NavigationButton onPress={() => handleNavButtonPress(2)} activeOpacity={0.7}>
          <C.Title isActive={slideWidth * 2 === indicatorPositionX}>Resultado</C.Title>
        </C.NavigationButton>
      </C.Navigation>
      <C.Indicator style={IndicatorAnimatedStyle} />

      <RangeInput isVisible={isRangeInputVisible} setIsVisible={setIsRangeInputVisible} />
    </C.Container>
  );
}
