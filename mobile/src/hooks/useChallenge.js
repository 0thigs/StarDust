import { useState, useEffect } from 'react';
import api from '../services/api';
import { useAuth } from './useAuth';

export const useChallenge = challengeId => {
  const {
    loggedUser: { completed_challenges_ids },
  } = useAuth();
  const [challenges, setChallenges] = useState([]);
  const [challenge, setChallenge] = useState({});

  function isChalllengeCompleted(id) {
    return completed_challenges_ids.includes(id);
  }

  function getAcceptanceRate(likes, votes) {
    return votes === 0 ? 0 : (likes / votes) * 100;
  }

  function addCompletaryData(challenge) {
    const isCompleted = isChalllengeCompleted(challenge.id);
    const acceptanceRate = getAcceptanceRate(challenge.likes, challenge.votes);
    return { ...challenge, isCompleted, acceptanceRate };
  }

  async function fetchChallenges() {
    try {
      const challenges = await api.getChallenges();
      const filteredChallenges = challenges
        .map(addCompletaryData)
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