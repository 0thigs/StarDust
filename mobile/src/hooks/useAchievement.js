import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { getUnlockedAchievements } from '../utils/achivements';

export function useAchievement() {
  const { loggedUser, updateLoggedUser } = useAuth();
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);

  async function updateUnlockedAchievementsIds() {
    const unlockedAchievements = getUnlockedAchievements(loggedUser);

    if (unlockedAchievements.length === 0) {
      return;
    }

    setUnlockedAchievements(unlockedAchievements);
    const unlockedAchievementsIds = unlockedAchievements.map(
      unlockedAchievement => unlockedAchievement.id
    );
    
    const updatedUnlockedAchievementsIds = [
      ...loggedUser.unlocked_achievements_ids,
      ...unlockedAchievementsIds,
    ];
    updateLoggedUser('unlocked_achievements_ids', updatedUnlockedAchievementsIds)
  }

  useEffect(() => {
    updateUnlockedAchievementsIds();
  }, [loggedUser]);

  return {
    unlockedAchievements,
  };
}
