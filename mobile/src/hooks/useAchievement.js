import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import api from '../services/api';

export function useAchievement(userId, canGetNewUnlockedAchievements) {
  const { loggedUser } = useAuth();
  const [achievements, setAchievements] = useState([]);
  const [newUnlockedAchievements, setNewUnlockedAchievements] = useState([]);

  function updateAchivement(achievement, newUnlockedAchievements) {
    // if (achievement.isUnlocked) return achievement
    const isUnlocked = newUnlockedAchievements.some(
      unlockedAchievement => unlockedAchievement.id === achievement.id
    );
    return { ...achievement, isUnlocked, isRescuable: isUnlocked };
  }

  function isNewAchievementUnlocked(achievement) {
    if (achievement.isUnlocked) return false;

    const userCurrentAmount = loggedUser[achievement.metric];

    const isNewAchievementUnlocked = userCurrentAmount >= achievement.required_amount + 1;
    return isNewAchievementUnlocked;
  }

  function getNewUnlockedAchievements(currentAchievements) {
    return currentAchievements
      .filter(isNewAchievementUnlocked)
      .filter(achievement => achievement !== undefined); // bug fix;
  }

  function verifyAchievement(achievement, userUnlockedAchievements, userAchievementsToRescue) {
    const isUnlocked = userUnlockedAchievements.some(
      unlockedAchievement => unlockedAchievement.achievement_id === achievement.id
    );
    const isRescuable = userAchievementsToRescue.some(
      achievementToRescue => achievementToRescue.achievement_id === achievement.id
    );
    return { ...achievement, isUnlocked, isRescuable };
  }

  async function verifyHasNewUnlockedAchievements() {
    const newUnlockedAchievements = getNewUnlockedAchievements(achievements);
    console.log(newUnlockedAchievements);
    if (!newUnlockedAchievements.length) return;

    setNewUnlockedAchievements(newUnlockedAchievements);

    for (const { id } of newUnlockedAchievements) {
      await api.addUserUnlockedAchievement(id, userId);
      await api.addUserAchievementsToRescue(id, userId);
    }

    const updatedAchievements = achievements.map(achievement =>
      updateAchivement(achievement, newUnlockedAchievements)
    );
    console.log(updatedAchievements.find(a => a.position === 1).isRescuable);
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
      const [achievements, userUnlockedAchievements, userAchievementsToRescue] = await Promise.all([
        api.getAchievements(),
        api.getUserUnlockedAchievements(userId),
        api.getUserAchievementsToRescue(userId),
      ]);
      const verifiedAchievements = achievements.map(achievement =>
        verifyAchievement(achievement, userUnlockedAchievements, userAchievementsToRescue)
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
    removeRecuedAchievement,
    fetchAchievements,
  };
}
