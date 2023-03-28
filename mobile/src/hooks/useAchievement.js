import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
// import { getUnlockedAchievements } from '../utils/achivements';
import api from '../services/api';

export function useAchievement() {
  const { loggedUser, updateLoggedUser } = useAuth();
  const [achievements, setAchievements] = useState([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);

  async function fetchAchievements() {
    try {
      const achievements = await api.getAchievements();
      setAchievements(achievements);
    } catch (error) {
      console.log(error);
    }
  }

  function checkAchievement(achievement, user) {
    if (user.unlocked_achievements_ids.includes(achievement.id)) {
      return;
    }

    const userCurrentCount = Array.isArray(user[achievement.metric])
      ? user[achievement.metric].length - 1
      : user[achievement.metric];

    const isAchievementUnlocked = userCurrentCount >= achievement.requiredCount;
    if (isAchievementUnlocked) {
      return { ...achievement, isUnlocked: true };
    }
  }

  function getUnlockedAchievements(user) {
    return achievements
      .map(achievement => checkAchievement(achievement, user))
      .filter(achievement => achievement !== undefined); // bug fix;
  }

  async function updateUnlockedAchievementsIds() {
    const unlockedAchievements = getUnlockedAchievements(loggedUser);

    if (unlockedAchievements.length === 0) return;

    setUnlockedAchievements(unlockedAchievements);
    const unlockedAchievementsIds = unlockedAchievements.map(
      unlockedAchievement => unlockedAchievement.id
    );

    const updatedUnlockedAchievementsIds = [
      ...loggedUser.unlocked_achievements_ids,
      ...unlockedAchievementsIds,
    ];
    updateLoggedUser('unlocked_achievements_ids', updatedUnlockedAchievementsIds);

    const achievementsIdsToRecue = [...unlockedAchievementsIds];
    updateLoggedUser('achievements_ids_to_rescue', achievementsIdsToRecue);
  }

  useEffect(() => {
    fetchAchievements();
    updateUnlockedAchievementsIds();
  }, [loggedUser]);

  return {
    achievements,
    unlockedAchievements,
  };
}
