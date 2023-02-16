import React from 'react';
import * as C from './styles';

export function Badge({ name, image: Image, isCurrentRanking }) {
  const size = isCurrentRanking ? 100 : 75;
  return (
    <C.Container>
      <Image width={size} height={size} />
      <C.Name>{isCurrentRanking && name}</C.Name>
    </C.Container>
  );
}
