import { useEffect } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import * as C from './styles';
import * as Icon from 'react-native-feather';
import theme from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';
const iconSize = 25;

export function ChallengeHeader({ indicatorPositionX, slideWidth, sliderRef }) {
  const navigation = useNavigation();
  const CurrentIndicatorPositionX = useSharedValue(0);

  const IndicatorAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(CurrentIndicatorPositionX.value, { duration: 250 }) }],
    };
  });

  function hanbleBackButtonPress() {
    navigation.reset({
      routes: [{ name: 'DrawerRoutes' }],
    });
  }

  function handleNavButtonPress(index) {
    sliderRef.current.scrollToIndex({ index });
  }

  useEffect(() => {
    CurrentIndicatorPositionX.value = indicatorPositionX / 3;
  }, [indicatorPositionX]);

  return (
    <C.Container>
      <C.Top>
        <C.HeaderButton onPress={hanbleBackButtonPress}>
          <Icon.ArrowLeft width={iconSize} height={iconSize} color={theme.colors.green_500} />
        </C.HeaderButton>
        <C.Title align={'right'}>Desafio</C.Title>
        <C.HeaderButton>
          <Icon.MoreVertical width={iconSize} height={iconSize} color={theme.colors.green_500} />
        </C.HeaderButton>
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
    </C.Container>
  );
}
