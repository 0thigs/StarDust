import { createContext, useRef, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRocket } from '../hooks/useRocket';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const { loggedUser } = useAuth();
  const { rocket } = useRocket(loggedUser.rocket_id);
  //   const [lastUnlockedStarYPosition, setLastUnlockedStarYPosition] = useState(null);
  const lastUnlockedStarYPosition = useRef();

  return (
    <ScrollContext.Provider
      value={{
        lastUnlockedStarYPosition,
        rocket,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
