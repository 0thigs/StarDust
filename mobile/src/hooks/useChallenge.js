import { useState, useEffect } from 'react';
import api from '../services/api';

export const useChallenge = (challengeId, userId, shouldIncludeChallengeStars = false) => {
  const [challenges, setChallenges] = useState([]);
  const [challenge, setChallenge] = useState({});

  async function addUserCompletedChallenges(challengeId) {
    try {
      await api.addUserCompletedChallenges(challengeId, userId);
    } catch (error) {
      console.error(error);
    }
  }

  function getAcceptanceRate(likes, votes) {
    return votes === 0 ? 0 : (likes / votes) * 100;
  }

  function addCompletaryData(challenge, userCompletedChallenges, challengeCategories) {
    const isCompleted = userCompletedChallenges.some(
      completedChallenge => completedChallenge.challenge_id === challenge.id
    );
    const categories = challengeCategories.filter(
      category => category.challenge_id === challenge.id
    );
    const acceptanceRate = getAcceptanceRate(challenge.likes, challenge.votes);
    return { ...challenge, isCompleted, acceptanceRate, categories };
  }

  async function fetchChallenges() {
    try {
      const [challenges, userCompletedChallenges, challengeCategories] = await Promise.all([
        api.getChallenges(),
        api.getUserCompletedChallenges(userId),
        api.getChallengeCategories(),
      ]);

      const filteredChallenges = challenges
        .map(challenge =>
          addCompletaryData(challenge, userCompletedChallenges, challengeCategories)
        )
        .filter(challenge => (shouldIncludeChallengeStars ? true : !challenge.star_id));

      setChallenges(filteredChallenges);
    } catch (error) {
      console.error(error);
    }
  }

  function verifyChallenge(challenge) {
    const isCompleted = challenge.users_completed_challenges.some(
      challenge => challenge.user_id === userId
    );
    if (isCompleted) delete challenge.users_completed_challenges;
    return { ...challenge, isCompleted };
  }

  async function fetchCurrentChallenge() {
    try {
      const challenge = await api.getChallenge(challengeId);
      const verifiedChallenge = verifyChallenge(challenge);
      setChallenge(verifiedChallenge);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (challengeId) {
      fetchCurrentChallenge();
      return;
    }
    fetchChallenges();
  }, []);

  return { challenges, challenge, fetchChallenges, addUserCompletedChallenges };
};
