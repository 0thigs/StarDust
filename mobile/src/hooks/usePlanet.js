import { useState, useEffect } from 'react';
import api from '../services/api';

export const usePlanet = () => {
  const [planets, setPlanets] = useState([]);

  function getCurrentPlanet(starId) {
    return planets.find(planet => planet.stars.some(star => star.id === starId));
  }

  function getCurrentStar(starId) {    
    if (!planets.length) return 
    const currentPlanet = getCurrentPlanet(starId);
    return currentPlanet.stars.find(star => star.id === starId);
  }

  function getNextStar(starId) {
    const currentPlanet = getCurrentPlanet(starId);
    const currentStar = getCurrentStar(starId);
    return currentPlanet.stars.find(star => star.number === currentStar.number + 1);
  }

  async function fetchPlanets() {
    try {
      const planets = await api.getPlanets();

      setPlanets(planets);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (planets.length) return 
    fetchPlanets();
  }, []);

  return { planets, getCurrentStar, getNextStar };
};
