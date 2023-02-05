import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { getUnlockedAchievements } from '../utils/achivements';
import api from '../services/api';

export function useAchievement() {
  const { user, setUser } = useAuth();
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);

  async function updateUnlockedAchievementsIds() {
    const unlockedAchievements = getUnlockedAchievements(user);

    if (unlockedAchievements.length === 0) {
      return;
    }

    setUnlockedAchievements(unlockedAchievements);
    const unlockedAchievementsIds = unlockedAchievements.map(
      unlockedAchievement => unlockedAchievement.id
    );
    setUser(user => {
      return {
        ...user,
        unlocked_achievements_ids: [...user.unlocked_achievements_ids, ...unlockedAchievementsIds],
      };
    });

    try {
      await api.updateUser('unlocked_achievements_ids', unlockedAchievementsIds, user.id);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    updateUnlockedAchievementsIds();
  }, [user]);

  return {
    unlockedAchievements,
  };
}
