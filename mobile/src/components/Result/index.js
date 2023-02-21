import { useState, useEffect } from 'react';
import { TestCase } from '../TestCase';
import { VerificationButton } from '../VerificationButton';
import * as C from './styles';

export function Result({ testCases, userOutputs, setIsEnd, backToCode }) {
  const [results, setResults] = useState([]);
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isAnswerVerified, setIsAnswerVerified] = useState(false);

  function handleVerificationButton() {
    setIsAnswerVerified(!isAnswerVerified);

    const isAnswerCorrect = results.length > 0 && results.every(result => !!result);
    if (isAnswerCorrect) {
      setIsAnswerWrong(false);
      if (isAnswerVerified) setIsEnd(true);
      return;
    }

    setIsAnswerWrong(true);
    if (isAnswerVerified) {
      backToCode();
    }
  }

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
      <C.TestCases>
        {testCases.map(({ input, expectedOutput }, index) => (
          <TestCase
            key={`test-case-${index}`}
            number={index + 1}
            input={input}
            expectedOutput={expectedOutput}
            userOutput={userOutputs[index]}
            isCorrect={results[index]}
          />
        ))}
      </C.TestCases>
      <VerificationButton
        verifyAnswer={handleVerificationButton}
        isAnswered={true}
        isAnswerVerified={isAnswerVerified}
        isAnswerWrong={isAnswerWrong}
      />
    </C.Container>
  );
}
