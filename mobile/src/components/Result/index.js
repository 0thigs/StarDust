import { useState, useEffect, useRef } from 'react';
import { TestCase } from '../TestCase';
import { VerificationButton } from '../VerificationButton';
import { CommentsList } from '../CommentsList';
import * as C from './styles';
import { compareSenquences } from '../../utils/compareSenquences';

export function Result({ challengeId, testCases, userOutputs, isOutputArray, setIsEnd, goToCode }) {
  const [results, setResults] = useState([]);
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isAnswerVerified, setIsAnswerVerified] = useState(false);
  const [canFetchComments, setCanFetchComments] = useState(false);
  const bottomSheetRef = useRef(null);

  function handleVerificationButton() {
    setIsAnswerVerified(!isAnswerVerified);

    const isAnswerCorrect = results.length && results.every(result => !!result);
    if (isAnswerCorrect) {
      setCanFetchComments(true);
      setIsAnswerWrong(false);
      if (isAnswerVerified) setIsEnd(true);
      return;
    }

    setIsAnswerWrong(true);
    if (isAnswerVerified) {
      goToCode();
    }
  }

  function verifyResult({ expectedOutput }, index) {
    return compareSenquences(
      Array.isArray(userOutputs[index]) ? userOutputs[index] : [userOutputs[index].toString().trim()],
      Array.isArray(expectedOutput) ? expectedOutput : [expectedOutput.toString().trim()]
    );
  }

  function showComments() {
    bottomSheetRef.current.expand();
  }

  useEffect(() => {
    if (userOutputs.length === testCases.length) {
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
            isOutputArray={isOutputArray.current[index] ?? false}
          />
        ))}
      </C.TestCases>
      <VerificationButton
        verifyAnswer={handleVerificationButton}
        isAnswered={true}
        isAnswerVerified={isAnswerVerified}
        isAnswerWrong={isAnswerWrong}
        showComments={showComments}
        isChallenge={true}
      />

      {canFetchComments && (
        <CommentsList
          bottomSheetRef={bottomSheetRef}
          challengeId={challengeId}
          canFetchComments={canFetchComments}
        />
      )}
    </C.Container>
  );
}
