import React from 'react';
import { useEffect } from 'react';
import theme from '../../global/styles/theme';
import { useLesson } from '../../hooks/useLesson';
import * as C from './styles';

export function Button({ title, onPress, isLoading, color, background, isDisabled, small }) {
  const [state, dispatch] = useLesson();


  return (
    <C.Container
      onPress={onPress}
      background={background}
      disabled={isDisabled}
      isSmall={small}
      activeOpacity={0.7}
    >
      {isLoading ? (
        <C.Loader size="large" color={theme.colors.green_900} />
      ) : (
        <C.Title color={color}>{title}</C.Title>
      )}
    </C.Container>
  );
}
