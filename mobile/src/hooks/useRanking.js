import { useState, useEffect } from 'react';
import api from '../services/api';

export const useRanking = (rankingId, canGetAllRankings) => {
  const [ranking, setRanking] = useState(null);
  const [rankings, setRankings] = useState([]);

  async function fetchRanking() {
    try {
      const ranking = await api.getRanking(rankingId);
      setRanking(ranking);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchAllRankings() {
    try {
      const rankings = await api.getRankings();
      setRankings(rankings);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRanking();
    if (canGetAllRankings) fetchAllRankings();
  }, []);

  return { ranking, rankings };
};
