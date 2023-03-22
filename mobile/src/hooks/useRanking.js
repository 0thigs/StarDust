import { useState, useEffect } from 'react';
import api from '../services/api';

export const useRanking = idRanking => {
  const [ranking, setRanking] = useState(null);

  async function fetchRanking() {
    try {
      const ranking = await api.getRanking(idRanking);
      setRanking(ranking);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRanking();
  }, []);

  return { ranking };
};
