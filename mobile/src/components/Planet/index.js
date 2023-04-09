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
import { SvgUri } from 'react-native-svg';
import { getImage } from '../../utils/getImage';

export function Planet({ name, image, icon, stars, lastUnlockedStarId }) {
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
        <SvgUri uri={getImage('planets', image)} width={100} height={100} />
        <C.PlanetSign style={PlanetSignAnimatedStyle}>
          <SvgUri uri={getImage('planets', icon)} />
          <C.PlanetName>{name}</C.PlanetName>
        </C.PlanetSign>
      </C.PlanetInfo>
      {stars.map(({ id, name, number, isUnlocked, isChallenge }) => {
        return (
          <Star
            key={id}
            id={id}
            name={name}
            number={number}
            isUnlocked={!isUnlocked}
            isChallenge={isChallenge}
            isLastUnlockedStar={id === lastUnlockedStarId}
          />
        );
      })}
    </C.Container>
  );
}
