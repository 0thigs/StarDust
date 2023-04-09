import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import api from '../services/api';

export function useAchievement(canGetNewUnlockedAchievements) {
  const { loggedUser, updateLoggedUser } = useAuth();
  const [achievements, setAchievements] = useState([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [newUnlockedAchievements, setNewUnlockedAchievements] = useState([]);

  function updateAchivement(achievement, newUnlockedAchievements) {
    const isUnlocked = newUnlockedAchievements.some(
      unlockedAchievement => unlockedAchievement.id === achievement.id
    );
    return { ...achievement, isUnlocked };
  }

  function isNewAchievementUnlocked(achievement) {
    if (achievement.isUnlocked) return;

    const userCurrentAmount = loggedUser[achievement.metric];

    const isNewAchievementUnlocked = userCurrentAmount >= achievement.required_amount;
    if (isNewAchievementUnlocked) return achievement;
  }

  function getNewUnlockedAchievements(currentAchievements) {
    return currentAchievements
      .filter(isNewAchievementUnlocked)
      .filter(achievement => achievement !== undefined); // bug fix;
  }

  function verifyAchievementUnlocking(achievement, userUnlockedAchievements) {
    const isUnlocked = userUnlockedAchievements.some(
      unlockedAchievement => unlockedAchievement.achievement_id === achievement.id
    );
    return { ...achievement, isUnlocked };
  }

  async function verifyHasNewUnlockedAchievements() {
    const newUnlockedAchievements = getNewUnlockedAchievements(achievements);

    if (!newUnlockedAchievements.length) return;

    setNewUnlockedAchievements(newUnlockedAchievements);

    let achievementsIdsToRecue = [];
    for (const { id } of newUnlockedAchievements) {
      api.addUserUnlockedAchievement(id, loggedUser.id);
      achievementsIdsToRecue.push(id);
    }

    const updatedAchievements = achievements.map(achievement =>
      updateAchivement(achievement, newUnlockedAchievements)
    );
    setAchievements(updatedAchievements);

    updateLoggedUser('achievements_ids_to_rescue', [
      ...loggedUser.achievements_ids_to_rescue,
      ...achievementsIdsToRecue,
    ]);
  }

  async function fetchAchievements() {
    try {
      const achievements = await api.getAchievements();
      const userUnlockedAchievements = await api.getUserUnlockedAchievements(loggedUser.id);
      const currentAchievements = achievements.map(achievement =>
        verifyAchievementUnlocking(achievement, userUnlockedAchievements)
      );
      setAchievements(currentAchievements);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!achievements.length) fetchAchievements();
    if (canGetNewUnlockedAchievements) verifyHasNewUnlockedAchievements();
  }, [achievements, loggedUser]);

  return {
    achievements,
    newUnlockedAchievements,
  };
}
