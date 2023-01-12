import React, { useEffect, useState } from 'react';
import * as C from './styles';

import { Star } from '../Star';
import { planetImages } from '../../utils/PlanetsImages';
import { planetIcons } from '../../utils/PlanetIcons';

import * as Animatable from 'react-native-animatable';

export function Planet({ title, id, CurrentPlanetStarsIds, stars }) {
  const [currentPlanetStars, setCurrentPlanetStars] = useState([]);

  const PlanetImage = planetImages['planet' + id];
  const PlanetIcon = planetIcons['planet' + id];

  function getCurrentPlanetStars() {
    const planetStars = stars.filter(star => CurrentPlanetStarsIds.includes(star.id));
    setCurrentPlanetStars(planetStars);
  }

  useEffect(() => {
    getCurrentPlanetStars();
  }, []);

  return (
    <C.Container>
      <C.PlanetInfo>
        <PlanetImage width={100} height={100} />
        <C.PlanetSign>
          <PlanetIcon />
          <C.PlanetTitle>{title}</C.PlanetTitle>
        </C.PlanetSign>
      </C.PlanetInfo>
      <C.StarsList
        data={currentPlanetStars}
        keyExtractor={star => star.id}
        renderItem={({ item }) => (
          <Star name={item.title} number={item.number} isDisabled={false} />
        )}
      />
    </C.Container>
  );
}
