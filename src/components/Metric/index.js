import React from 'react';
import * as C from './styles';

export function Metric({ title, count, icon, color, large }) {
  return (
    <C.Container color={color} large={large}>
      <C.Header color={color}>
        <C.Title>{title}</C.Title>
      </C.Header>
      <C.Body>
        {icon}
        <C.Count large={large}>{count}</C.Count>
      </C.Body>
    </C.Container>
  );
}
