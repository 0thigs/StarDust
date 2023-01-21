import React from 'react';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function Button({ title, onPress, isLoading, color, isDisabled, small }) {
  return (
    <C.Container
      onPress={onPress}
      color={color}
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
