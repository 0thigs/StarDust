import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import api from '../services/api';

export const useRocket = idRocket => {
  const { loggedUser } = useAuth();
  const [rocket, setRocket] = useState(null);
  const [rockets, setRockets] = useState([]);

  async function fetchRocket() {
    try {
      const rocket = await api.getRocket(idRocket);
      setRocket(rocket);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchRockets() {
    try {
      const rockets = await api.getRockets();
      setRockets(rockets);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!idRocket) {
      fetchRockets();
      return;
    }
    fetchRocket();
  }, [loggedUser.avatar_id, loggedUser.acquired_avatars_id]);

  return { rocket, rockets };
};
