import { useContext } from 'react';
import { EditorContext } from '../contexts/EditorContext';

export function useEditor() {
  const context = useContext(EditorContext);
  return context;
}
