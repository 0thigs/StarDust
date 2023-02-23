import { useState } from 'react';
import { Problem } from '../components/Problem';
import { Code } from '../components/Code';
import { Result } from '../components/Result';
import { challenges } from '../utils/challenges';

export function useChallenge(id) {
  const { title, texts, code, testCases } = challenges.find(challenge => challenge.id === id);
  const [userCode, setUserCode] = useState('');

  const slides = [
    {
      id: 1,
      component: <Problem title={title} texts={texts} />,
    },
    {
      id: 2,
      component: <Code code={code} setUserCode={setUserCode} />,
    },
    {
      id: 3,
      component: <Result testCases={testCases} />,
    },
  ];

  function verifyUserCode() {
    console.log(userCode);
  }

  return {
    slides,
    setUserCode,
  };
}