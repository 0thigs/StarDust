import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import api from '../services/api';

export function useAchievement(userId, canGetNewUnlockedAchievements) {
  const { loggedUser, updateLoggedUser } = useAuth();
  const [achievements, setAchievements] = useState([]);
  const [newUnlockedAchievements, setNewUnlockedAchievements] = useState([]);

  function updateAchivement(achievement, newUnlockedAchievements) {
    if (achievement.isUnlocked) return achievement;
    const isUnlocked = newUnlockedAchievements.some(
      unlockedAchievement => unlockedAchievement.id === achievement.id
    );
    return { ...achievement, isUnlocked };
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

  function verifyAchievementUnlocking(achievement) {
    const isUnlocked = achievement.users_unlocked_achievements.some(
      achievement => achievement.user_id === userId
    );
    return { ...achievement, isUnlocked };
  }

  async function verifyHasNewUnlockedAchievements() {
    const newUnlockedAchievements = getNewUnlockedAchievements(achievements);
    if (!newUnlockedAchievements.length) return;

    setNewUnlockedAchievements(newUnlockedAchievements);
    let achievementsIdsToRecue = [];
    for (const { id } of newUnlockedAchievements) {
      api.addUserUnlockedAchievement(id, userId);
      achievementsIdsToRecue.push(id);
    }

    const updatedAchievements = achievements.map(achievement =>
      updateAchivement(achievement, newUnlockedAchievements)
    );
    setAchievements(updatedAchievements);
    console.log({updatedAchievements});

    updateLoggedUser('achievements_to_rescue', [
      ...loggedUser.achievements_to_rescue,
      ...achievementsIdsToRecue,
    ]);
  }

  async function fetchAchievements() {
    try {
      const achievements = await api.getAchievements();
      const verifiedAchievements = achievements.map(verifyAchievementUnlocking);
      setAchievements(verifiedAchievements);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!achievements.length) fetchAchievements();
    if (canGetNewUnlockedAchievements && achievements.length) verifyHasNewUnlockedAchievements();
  }, [achievements, loggedUser]);

  return {
    achievements,
    newUnlockedAchievements,
  };
}
