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
      currentRocket.id === updatedRocket.id ? { ...updatedRocket, isAcquired: true } : currentRocket
    );
  }

  async function addUserAcquiredRocket(rocketId) {
    try {
      await api.addUserAcquiredRocket(rocketId, loggedUser.id);
      const updatedRocket = rockets.find(rocket => rocket.id === rocketId);
      setRockets(currentRockets => updatecurrentRockets(currentRockets, updatedRocket));
    } catch (error) {
      console.log(error);
    }
  }

  function verifyRocketAcquirement(rocket) {
    const isAcquired = rocket.users_acquired_rockets.some(
      acquiredRocket => acquiredRocket.user_id === loggedUser.id
    );
    return { ...rocket, isAcquired };
  }

  async function fetchRockets() {
    try {
      const rockets = await api.getRockets();
      const verifiedRockets = rockets.map(verifyRocketAcquirement);
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
  }, [loggedUser.rocket_id]);

  return { rocket, rockets, addUserAcquiredRocket };
};
