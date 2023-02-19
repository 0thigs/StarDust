import React from 'react';
import { TestCase } from '../TestCase';
import * as C from './styles';

export function Result({ testCases }) {
  return (
    <C.Container>
      {testCases.map(({ input, expectedOutput }, index) => (
        <TestCase
          key={`test-case-${index}`}
          number={++index}
          input={input}
          expectedOutput={expectedOutput}
        />
      ))}
    </C.Container>
  );
}
