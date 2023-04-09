import { createContext, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRocket } from '../hooks/useRocket';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {

  return (
    <AchievementContext.Provider
      value={{
        achievements,
        setLastUnlockedStarYPosition,
        rocket,
      }}
    >
      {children}
    </AchievementContext.Provider>
  );
};
