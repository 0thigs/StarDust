import React from 'react';
import { Problem } from '../../components/Problem';
import { challenges } from '../../utils/challenges';
import * as C from './styles';

import { Code } from '../../components/Code';
import { Result } from '../../components/Result';
import { ChallengeHeader } from '../../components/ChallengeHeader';

export function Challenge({ id = 1 }) {
  const { title, texts, code, testCases } = challenges.find(challenge => challenge.id === id);

  return (
    <C.Container>
      <ChallengeHeader />

      {/* <Problem title={title} texts={texts} />
      <Code code={code} /> */}
      <Result testCases={testCases} />
    </C.Container>
  );
}
