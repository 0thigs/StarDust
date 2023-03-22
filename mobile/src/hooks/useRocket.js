import { useState, useEffect } from 'react';
import api from '../services/api';

export const useRocket = (idRocket, isToFecth = true) => {
  const [rocket, setRocket] = useState(null);

  async function fetchRocket() {
    try {
      const rocket = await api.getRocket(idRocket);
      console.log({ rocket });
      setRocket(rocket);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isToFecth) fetchRocket();
  }, []);

  return { rocket };
};
