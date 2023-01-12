import { useContext } from 'react';

import { PhaseContext } from '../contexts/PhaseContext';

export function usePhase() {
  const context = useContext(PhaseContext);
  return context;
}
