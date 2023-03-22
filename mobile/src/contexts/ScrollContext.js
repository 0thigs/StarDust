import { createContext, useState,  } from 'react';
import { useAuth } from '../hooks/useAuth';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const { loggedUser } = useAuth();
  const [lastUnlockedStarYPosition, setLastUnlockedStarYPosition] = useState(null);
  const [rocket, setRocket] = useState(null);
  const lastUnlockedStarId = loggedUser.unlocked_stars_ids.slice(-1)[0];

  async function getRocket() {
    try {
      const rocket = await api.getRocket(loggedUser.selected_rocket_id);
      setRocket(rocket);
    } catch (error) {
      console.log(error);
    }
  }

//   useEffect(() => {
//     console.log(lastUnlockedStarYPosition);
//   }, [lastUnlockedStarYPosition]);

  return (
    <ScrollContext.Provider
      value={{
        lastUnlockedStarId,
        lastUnlockedStarYPosition,
        setLastUnlockedStarYPosition,
        getRocket,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
