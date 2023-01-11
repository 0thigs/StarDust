import React from 'react';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function Button({ title, onPress, isLoading }) {
  return (
    <C.Container onPress={onPress}>
      {isLoading ? (
        <C.Loader size="large" color={theme.colors.green_900} />
      ) : (
        <C.Title>{title}</C.Title>
      )}
    </C.Container>
  );
}
