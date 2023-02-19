import React from 'react';
import * as C from './styles';
import * as Icon from 'react-native-feather';
import theme from '../../global/styles/theme';
import { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';
import { useState } from 'react';
const iconSize = 25;

export function ChallengeHeader({ indicatorPositionX, slideWidth, sliderRef }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const CurrentIndicatorPositionX = useSharedValue(indicatorPositionX);
  const TitleColor = useSharedValue('');

  const IndicatorAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(CurrentIndicatorPositionX.value, { duration: 100 }) }],
    };
  });

  function handleButtonPress(index) {
    sliderRef.current.scrollToIndex({ index });
    setCurrentIndex(index);
  }

  useEffect(() => {
    CurrentIndicatorPositionX.value = indicatorPositionX / 3;
    // console.log(indicatorPositionX);
  }, [indicatorPositionX]);

  return (
    <C.Container>
      <C.Top>
        <C.HeaderButton>
          <Icon.ArrowLeft width={iconSize} height={iconSize} color={theme.colors.green_500} />
        </C.HeaderButton>
        <C.Title align={'right'}>Desafio</C.Title>
        <C.HeaderButton>
          <Icon.MoreVertical width={iconSize} height={iconSize} color={theme.colors.green_500} />
        </C.HeaderButton>
      </C.Top>
      <C.Navigation>
        <C.NavigationButton onPress={() => handleButtonPress(0)} activeOpacity={0.7}>
          <C.Title isActive={0 === indicatorPositionX}>Problema</C.Title>
        </C.NavigationButton>
        <C.NavigationButton onPress={() => handleButtonPress(1)} activeOpacity={0.7}>
          <C.Title isActive={slideWidth === indicatorPositionX}>Código</C.Title>
        </C.NavigationButton>
        <C.NavigationButton onPress={() => handleButtonPress(2)} activeOpacity={0.7}>
          <C.Title isActive={slideWidth * 2 === indicatorPositionX}>Resultado</C.Title>
        </C.NavigationButton>
      </C.Navigation>
      <C.Indicator style={IndicatorAnimatedStyle} />
    </C.Container>
  );
}
