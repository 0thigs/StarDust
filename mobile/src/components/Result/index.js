import React from 'react';
import { TestCase } from '../TestCase';
import * as C from './styles';

export function Result({ testCases, userOutputs }) {
    // console.log(userOutputs)
  return (
    <C.Container>
      {testCases.map(({ input, expectedOutput }, index) => (
        <TestCase
          key={`test-case-${index}`}
          number={index + 1}
          input={input}
          expectedOutput={expectedOutput}
          userOutput={userOutputs[index]}
        />
      ))}
    </C.Container>
  );
}
