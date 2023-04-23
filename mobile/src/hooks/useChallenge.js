import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import api from '../services/api';

export const useChallenge = challengeId => {
  const { loggedUser } = useAuth();
  const [challenges, setChallenges] = useState([]);
  const [challenge, setChallenge] = useState({});

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
        api.getUserCompletedChallenges(loggedUser.id),
        api.getChallengeCategories(),
      ]);

      const filteredChallenges = challenges
        .map(challenge =>
          addCompletaryData(challenge, userCompletedChallenges, challengeCategories)
        )
        .filter(challenge => !challenge.star_id);

      setChallenges(filteredChallenges);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchCurrentChallenge() {
    try {
      const challenge = await api.getChallenge(challengeId);
      setChallenge(challenge);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (challengeId) fetchCurrentChallenge();
    else fetchChallenges();
  }, []);

  return { challenges, challenge };
};
