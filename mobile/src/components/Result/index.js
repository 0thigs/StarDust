import { useState, useEffect, useRef } from 'react';
import { TestCase } from '../TestCase';
import { VerificationButton } from '../VerificationButton';
import { CommentsList } from '../CommentsList';
import * as C from './styles';

export function Result({ challengeId, testCases, userOutputs, setIsEnd, backToCode }) {
  const [results, setResults] = useState([]);
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isAnswerVerified, setIsAnswerVerified] = useState(false);
  const bottomSheetRef = useRef(null);

  function handleVerificationButton() {
    setIsAnswerVerified(!isAnswerVerified);

    const isAnswerCorrect = results.length && results.every(result => !!result);
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

  function showComments() {
    bottomSheetRef.current.expand();
  }

  useEffect(() => {
    if (userOutputs.length) {
      setResults(testCases.map(verifyResult));
    }
  }, [userOutputs]);

  return (
    <C.Container>
      <C.TestCases>
        {testCases.map(({ input, expectedOutput, isLocked }, index) => (
          <TestCase
            key={`test-case-${index}`}
            number={index + 1}
            input={input}
            expectedOutput={expectedOutput}
            isLocked={isLocked}
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
        showComments={showComments}
      />

      <CommentsList bottomSheetRef={bottomSheetRef} challengeId={challengeId} />
    </C.Container>
  );
}
