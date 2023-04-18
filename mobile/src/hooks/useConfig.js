import { useContext } from 'react';
import { ConfigContext } from '../contexts/ConfigContext';

export function useConfig() {
  const context = useContext(ConfigContext);
  return context;
}
