import React, { useEffect, useState } from 'react';
import * as C from './styles';

import { Star } from '../Star';
import { planetImages } from '../../utils/PlanetsImages';
import { planetIcons } from '../../utils/PlanetIcons';

import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  withDelay,
} from 'react-native-reanimated';

export function Planet({ title, id, currentPlanetStarsIds, stars }) {
  const [currentPlanetStars, setCurrentPlanetStars] = useState([]);

  const PlanetImage = planetImages['planet' + id];
  const PlanetIcon = planetIcons['planet' + id];

  const PlanetSignPosition = useSharedValue(-5);
  const PlanetInfoScale = useSharedValue(0);

  const enabledStars = currentPlanetStars.filter(star => star.isUnlocked)

  function getCurrentPlanetStars() {
    const planetStars = stars.filter(star => currentPlanetStarsIds.includes(star.id));
    setCurrentPlanetStars(planetStars);
  }

  const PlanetInfoAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: PlanetInfoScale.value }],
    };
  });

  const PlanetSignAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: PlanetSignPosition.value }],
    };
  });

  useEffect(() => {
    PlanetSignPosition.value = withDelay(800, withRepeat(withTiming(5, { duration: 1000 }), -1, true));
    PlanetInfoScale.value = withTiming(1, { duration: 800, easing: Easing.bounce });
    getCurrentPlanetStars();
  }, []);

  return (
    <C.Container>
      <C.PlanetInfo>
        <PlanetImage width={100} height={100} />
        <C.PlanetSign style={PlanetSignAnimatedStyle}>
          <PlanetIcon />
          <C.PlanetTitle>{title}</C.PlanetTitle>
        </C.PlanetSign>
      </C.PlanetInfo>
      <C.StarsList
        data={currentPlanetStars}
        keyExtractor={star => star.id}
        renderItem={({ item, index }) => {
          const isTheLastStarEnabled = index === enabledStars.length - 1;
          return (
            <Star
              id={item.id}
              name={item.title}
              number={item.number}
              isDisabled={!item.isUnlocked}
              isTheLastStarEnabled={isTheLastStarEnabled}
            />
          );
        }}
      />
    </C.Container>
  );
}