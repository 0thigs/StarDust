import React from 'react';
import * as C from './styles';

export function Button({ title, onPress }) {
  return (
    <C.Container onPress={onPress}>
      <C.Title>{title}</C.Title>
    </C.Container>
  );
}
