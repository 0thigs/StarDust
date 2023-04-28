import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

import api from '../services/api';
import { metricsExceptions } from '../utils/achievementsMetricsExceptions';

export function useAchievement(userId, canGetNewUnlockedAchievements) {
  const { loggedUser } = useAuth();
  const [achievements, setAchievements] = useState([]);
  const [newUnlockedAchievements, setNewUnlockedAchievements] = useState([]);

  function updateAchivement(achievement, newUnlockedAchievements) {
    if (achievement.isUnlocked) return achievement;
    const isUnlocked = newUnlockedAchievements.some(
      unlockedAchievement => unlockedAchievement.id === achievement.id
    );
    return { ...achievement, isUnlocked, isRescuable: isUnlocked };
  }

  function isNewAchievementUnlocked(achievement) {
    if (achievement.isUnlocked) return;

    const userCurrentAmount = loggedUser[achievement.metric];

    const isNewAchievementUnlocked = userCurrentAmount >= achievement.required_amount;

    return isNewAchievementUnlocked;
  }

  function getNewUnlockedAchievements(currentAchievements) {
    return currentAchievements
      .filter(isNewAchievementUnlocked)
      .filter(achievement => achievement !== undefined); // bug fix
  }

  function verifyAchievement(achievement, userUnlockedAchievements, userRescuableAchievements) {
    const isUnlocked = userUnlockedAchievements.some(
      unlockedAchievement => unlockedAchievement.achievement_id === achievement.id
    );
    const isRescuable = userRescuableAchievements.some(
      rescuableachievement => rescuableachievement.achievement_id === achievement.id
    );
    return { ...achievement, isUnlocked, isRescuable };
  }

  async function verifyHasNewUnlockedAchievements() {
    const newUnlockedAchievements = getNewUnlockedAchievements(achievements);
    if (!newUnlockedAchievements.length) return;

    setNewUnlockedAchievements(newUnlockedAchievements);

    for (const { id } of newUnlockedAchievements) {
      await Promise.all([
        api.addUserUnlockedAchievement(id, userId),
        api.addUserRescuableAchievements(id, userId),
      ]);
    }

    const updatedAchievements = achievements.map(achievement =>
      updateAchivement(achievement, newUnlockedAchievements)
    );
    setAchievements(updatedAchievements);
  }

  async function removeRecuedAchievement(achievementId) {
    try {
      await api.deleteUserRescuedAchievement(achievementId, userId);
      const updatedAchievements = achievements.map(achievement =>
        achievement.id === achievementId ? { ...achievement, isRescuable: false } : achievement
      );
      setAchievements(updatedAchievements);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchAchievements(userId) {
    try {
      const [achievements, userUnlockedAchievements, userRescuableAchievements] = await Promise.all(
        [
          api.getAchievements(),
          api.getUserUnlockedAchievements(userId),
          api.getUserRescuableAchievements(userId),
        ]
      );
      const verifiedAchievements = achievements.map(achievement =>
        verifyAchievement(achievement, userUnlockedAchievements, userRescuableAchievements)
      );
      setAchievements(verifiedAchievements);
      return verifiedAchievements;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!achievements.length && userId) fetchAchievements(userId);
    if (canGetNewUnlockedAchievements && achievements.length) verifyHasNewUnlockedAchievements();
  }, [achievements, loggedUser]);

  return {
    achievements,
    newUnlockedAchievements,
    setNewUnlockedAchievements,
    removeRecuedAchievement,
    fetchAchievements,
  };
}
