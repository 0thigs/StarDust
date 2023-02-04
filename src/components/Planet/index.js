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
  const PlanetSignPosition = useSharedValue(-5);
  const PlanetSignAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: PlanetSignPosition.value }],
    };
  });

  useEffect(() => {
    PlanetSignPosition.value = withDelay(
      800,
      withRepeat(withTiming(5, { duration: 1500 }), -1, true)
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
      {stars.map(({ id, name, number, isUnlocked }) => {
        return (
          <Star
            key={id}
            id={id}
            name={name}
            number={number}
            isDisabled={!isUnlocked}
          />
        );
      })}
    </C.Container>
  );
}
