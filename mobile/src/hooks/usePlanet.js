import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import api from '../services/api';

export const usePlanet = () => {
  const { loggedUser } = useAuth();
  const [planets, setPlanets] = useState([]);
  const [lastUnlockedStarId, setLasUnlockedStarId] = useState('');

  function getCurrentPlanet(starId) {
    return planets.find(planet => planet.stars.some(star => star.id === starId));
  }

  function getCurrentStar(starId) {
    if (!planets.length) return;
    const currentPlanet = getCurrentPlanet(starId);
    return currentPlanet.stars.find(star => star.id === starId);
  }

  function getNextStar(starId) {
    const currentPlanet = getCurrentPlanet(starId);
    const currentStar = getCurrentStar(starId);
    return currentPlanet.stars.find(star => star.number === currentStar.number + 1);
  }

  async function addUnlockedStar(starId) {
    try {
      await api.addUnlockedStar(starId, loggedUser.id);
    } catch (error) {
      console.log(error);
    }
  }

  function verifyStarUnlocking(planet, unlockedStars) {
    const { stars } = planet;
    const verifiedStars = stars.map((star) => {
      const isUnlocked = unlockedStars.some(unlockedStar => unlockedStar.star_id === star.id);
      if (isUnlocked) setLasUnlockedStarId(star.id);
      return { ...star, isUnlocked };
    });
    planet.stars = verifiedStars;
    return planet;
  }

  async function fetchPlanets() {
    try {
      const planets = await api.getPlanets();
      const unlockedStars = await api.getUserUnlockedStars(loggedUser.id);
      const planetsWithUnlockdedStars = planets.map(planet =>
        verifyStarUnlocking(planet, unlockedStars)
      );
      setPlanets(planetsWithUnlockdedStars);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (planets.length) return;
    fetchPlanets();
  }, []);

  return {
    planets,
    lastUnlockedStarId,
    getCurrentPlanet,
    getCurrentStar,
    getNextStar,
    addUnlockedStar,
  };
};
