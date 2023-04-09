import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import api from '../services/api';

export const useRocket = rocketId => {
  const { loggedUser } = useAuth();
  const [rocket, setRocket] = useState(null);
  const [rockets, setRockets] = useState([]);

  async function fetchRocket() {
    try {
      const rocket = await api.getRocket(rocketId);
      setRocket(rocket);
    } catch (error) {
      console.log(error);
    }
  }

  function updatecurrentRockets(currentRockets, updatedRocket) {
    return currentRockets.map(currentRocket =>
      currentRocket.id === updatedRocket.id ? {...updatedRocket, isAcquired: true} : currentRocket
    );
  }

  async function addUserAcquiredRocket(rocketId) {
    try {
      await api.addUserAcquiredRocket(rocketId, loggedUser.id);
      const updatedRocket = rockets.find(rocket => rocket.id === rocketId);
      const updatedRockets = updatecurrentRockets(rockets, updatedRocket);
      setRockets(currentRockets => updatecurrentRockets(currentRockets, updatedRocket));
    } catch (error) {
      console.log(error);
    }
  }

  function verifyRocketAcquirement(rocket, userAcquiredRockets) {
    const isAcquired = userAcquiredRockets.some(
      acquiredRocket => acquiredRocket.rocket_id === rocket.id
    );
    return { ...rocket, isAcquired };
  }

  async function fetchRockets() {
    try {
      const rockets = await api.getRockets();
      const userAcquiredRockets = await api.getUserAcquiredRockets(loggedUser.id);
      const verifiedRockets = rockets.map(rocket =>
        verifyRocketAcquirement(rocket, userAcquiredRockets)
      );
      setRockets(verifiedRockets);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!rocketId) {
      fetchRockets();
      return;
    }
    fetchRocket();
  }, [loggedUser.avatar_id, loggedUser.acquired_avatars_id]);

  return { rocket, rockets, addUserAcquiredRocket };
};
