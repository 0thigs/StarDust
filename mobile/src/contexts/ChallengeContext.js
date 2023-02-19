import { createContext, useReducer } from 'react';
import { useAuth } from '../hooks/useAuth';

import { Code } from '../components/Code';
import { Problem } from '../components/Problem';
import { Result } from '../components/Result';
import { challenges } from '../utils/challenges';

export const ChallengeContext = createContext();

const ChallengeReducer = (state, action) => {
  switch (action.type) {
    case 'setIndicatorPositionX':
      return {
        ...state,
        indicatorPositionX: action.payload,
      };
    case 'setUserCode':
      return {
        ...state,
        indicatorPositionX: action.payload,
      };
  }
};

export const ChallengeProvider = ({ children }) => {
  const { user } = useAuth();
  const { title, texts, code, testCases } = challenges.find(
    challenge => challenge.id === user.challengeId
  );

  const slides = [
    {
      id: 1,
      component: <Problem title={title} texts={texts} />,
    },
    {
      id: 2,
      component: <Code code={code} />,
    },
    {
      id: 3,
      component: <Result testCases={testCases} />,
    },
  ];

  const initialState = {
    indicatorPositionX: 0,
    userCode: '',
    slides,
  };

  const value = useReducer(ChallengeReducer, initialState);

  return <ChallengeContext.Provider value={value}>{children}</ChallengeContext.Provider>;
};
