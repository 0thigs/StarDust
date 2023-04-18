import { createContext, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRocket } from '../hooks/useRocket';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const { loggedUser } = useAuth();
  const { rocket } = useRocket(loggedUser.rocket_id);
  const [lastUnlockedStarYPosition, setLastUnlockedStarYPosition] = useState(null);

  return (
    <ScrollContext.Provider
      value={{
        lastUnlockedStarYPosition,
        setLastUnlockedStarYPosition,
        rocket,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
