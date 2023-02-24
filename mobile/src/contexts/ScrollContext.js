import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const { loggedUser } = useAuth();
  const [lastUnlockedStarYPosition, setLastUnlockedStarYPosition] = useState(null);
  const lastUnlockedStarId = loggedUser.unlocked_stars_ids.slice(-1)[0];

  useEffect(() => {
    // console.log(lastUnlockedStarYPosition);
  }, [lastUnlockedStarYPosition])

  return (
    <ScrollContext.Provider
      value={{ lastUnlockedStarId, lastUnlockedStarYPosition, setLastUnlockedStarYPosition }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
