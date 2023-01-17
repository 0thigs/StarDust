import React from 'react';
import * as C from './styles';

export function Metric({ title, count, icon, color, large, delay }) {
  return (
    <C.Container color={color} large={large} animation={'fadeInDown'} delay={delay} >
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