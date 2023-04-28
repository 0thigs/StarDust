import React from 'react';
import { useEffect } from 'react';
import { useAnimatedStyle, useSharedValue, withRepeat, withSpring } from 'react-native-reanimated';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function Button({
  title,
  onPress,
  isLoading,
  color,
  background,
  isDisabled,
  isSmall,
  hasAnimation,
}) {
  const ButtonScale = useSharedValue(1);
  const ButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: ButtonScale.value }],
    };
  });

  useEffect(() => {
    ButtonScale.value = withRepeat(withSpring(1.11), -1, true);
  }, []);

  return (
    <C.Container
      onPress={onPress}
      background={background}
      disabled={isDisabled}
      isSmall={isSmall}
      activeOpacity={0.7}
      style={hasAnimation && ButtonAnimatedStyle}
    >
      {isLoading ? (
        <C.Loader size={isSmall ? 'small' : 'large'} color={theme.colors.green_900} />
      ) : (
        <C.Title color={color} isSmall={isSmall}>
          {title}
        </C.Title>
      )}
    </C.Container>
  );
}
