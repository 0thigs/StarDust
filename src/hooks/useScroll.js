import { useContext } from 'react';
import { ScrollContext } from '../contexts/ScrollContext';

export function useScroll() {
  const context = useContext(ScrollContext);
  return context;
}
