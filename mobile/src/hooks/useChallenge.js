import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import api from '../services/api';

export const useChallenge = challengeId => {
  const { loggedUser } = useAuth();
  const {
    loggedUser: { completed_challenges_ids },
  } = useAuth();
  const [challenges, setChallenges] = useState([]);
  const [challenge, setChallenge] = useState({});

  function getAcceptanceRate(likes, votes) {
    return votes === 0 ? 0 : (likes / votes) * 100;
  }

  function addCompletaryData(challenge, userCompletedChallenges) {
    const isCompleted = userCompletedChallenges.some(
      completedChallenge => completedChallenge.challenge_id === challenge.id
    );
    const acceptanceRate = getAcceptanceRate(challenge.likes, challenge.votes);
    return { ...challenge, isCompleted, acceptanceRate };
  }

  async function fetchChallenges() {
    try {
      const challenges = await api.getChallenges();
      const userCompletedChallenges = await api.getUserCompletedChallenges(loggedUser.id);
      const filteredChallenges = challenges
        .map(challenge => addCompletaryData(challenge, userCompletedChallenges))
        .filter(challenge => !challenge.star_id);

      setChallenges(filteredChallenges);
    } catch (error) {
      console.log(error);
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
