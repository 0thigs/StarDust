import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

export function useChallenge() {
  const context = useContext(ChallengeContext);
  return context;
}
