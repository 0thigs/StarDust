import { useEffect } from 'react';
import * as C from './styles';

import { Star } from '../Star';

import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

export function Planet({ name, image: PlanetImage, icon: PlanetIcon, stars }) {
  const enabledStars = stars.filter(star => star.isUnlocked);

  const PlanetSignPosition = useSharedValue(-5);
  const PlanetSignAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: PlanetSignPosition.value }],
    };
  });

  useEffect(() => {
    PlanetSignPosition.value = withDelay(
      800,
      withRepeat(withTiming(5, { duration: 1000 }), -1, true)
    );
  }, []);

  return (
    <C.Container>
      <C.PlanetInfo>
        <PlanetImage width={100} height={100} />
        <C.PlanetSign style={PlanetSignAnimatedStyle}>
          <PlanetIcon />
          <C.PlanetName>{name}</C.PlanetName>
        </C.PlanetSign>
      </C.PlanetInfo>
      <C.StarsList
        data={stars}
        keyExtractor={star => star.id}
        renderItem={({ item, index }) => {
          const isTheLastStarEnabled = index === enabledStars.length - 1;
          return (
            <Star
              id={item.id}
              name={item.name}
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
