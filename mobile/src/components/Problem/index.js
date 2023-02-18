import React from 'react';
import * as C from './styles';

import { Text } from '../Text';

export function Problem({ title, texts }) {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      {texts.map(({ type, body }, index) => (
        <Text key={`text-${index}`} type={type} body={body} isRendered={false} />
      ))}
    </C.Container>
  );
}
