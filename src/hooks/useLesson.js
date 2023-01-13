import { useContext } from 'react';

import { LessonContext } from '../contexts/LessonContext';

export function useLesson() {
  const context = useContext(LessonContext);
  return context;
}
