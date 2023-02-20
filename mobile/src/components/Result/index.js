import { useState, useEffect } from 'react';
import { TestCase } from '../TestCase';
import { VerificationButton } from '../VerificationButton';
import * as C from './styles';

export function Result({ testCases, userOutputs }) {
  const [results, setResults] = useState([]);

  function verifyResult({ expectedOutput }, index) {
    if (userOutputs[index]) {
      return expectedOutput.toString().trim() === userOutputs[index].toString().trim();
    }
  }

  useEffect(() => {
    if (userOutputs.length > 0) {
      setResults(testCases.map(verifyResult));
    }
  }, [userOutputs]);

  return (
    <C.Container>
      {testCases.map(({ input, expectedOutput }, index) => (
        <TestCase
          key={`test-case-${index}`}
          number={index + 1}
          input={input}
          expectedOutput={expectedOutput}
          isCorrect={results[index]}
        />
      ))}
      <VerificationButton />
    </C.Container>
  );
}
