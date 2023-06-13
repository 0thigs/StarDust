import { useEffect, memo } from 'react';
import { useImageUri } from '../../hooks/useImageUri';
import { SvgUri } from 'react-native-svg';
import { Star } from '../Star';
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import * as C from './styles';

function PlanetComponent({ name, image, icon, stars, lastUnlockedStarId }) {
  const { imageUri: planetImageUri } = useImageUri('planets', image);
  const { imageUri: planetIconUri } = useImageUri('planets', icon);
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
        <SvgUri uri={planetImageUri} width={100} height={100} />
        <C.PlanetSign style={PlanetSignAnimatedStyle}>
          <SvgUri uri={planetIconUri} />
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
            isUnlocked={isUnlocked}
            isChallenge={isChallenge}
            isLastUnlockedStar={id === lastUnlockedStarId}
          />
        );
      })}
    </C.Container>
  );
}

export const Planet = memo(PlanetComponent);
