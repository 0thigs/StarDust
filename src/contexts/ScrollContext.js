import { createContext, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const { user } = useAuth();
  const [lastUnlockedStarYPosition, setLastUnlockedStarYPosition] = useState(null);
  const lastUnlockedStarId = user.unlocked_stars_ids.slice(-1)[0];

  return (
    <ScrollContext.Provider
      value={{ lastUnlockedStarId, lastUnlockedStarYPosition, setLastUnlockedStarYPosition }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
