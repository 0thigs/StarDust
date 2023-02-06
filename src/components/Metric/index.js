import React from 'react';
import * as C from './styles';

export function Metric({ title, count, icon, color, isLarge, delay }) {
  return (
    <C.Container color={color} isLarge={isLarge} animation={'fadeInDown'} delay={delay} >
      <C.Header color={color}>
        <C.Title>{title}</C.Title>
      </C.Header>
      <C.Body>
        {icon}
        <C.Count isLarge={isLarge}>{count}</C.Count>
      </C.Body>
    </C.Container>
  );
}