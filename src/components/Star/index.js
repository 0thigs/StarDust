import { useEffect } from 'react';
import * as C from './styles';

import EnabledStar from '../../assets/PlanetAssets/enabled-star.svg';
import DisabledStar from '../../assets/PlanetAssets/disabled-star.svg';
import EnabledStarDust from '../../assets/PlanetAssets/enabled-stardust.svg';
import DisabledStarDust from '../../assets/PlanetAssets/disabled-stardust.svg';
import { useAnimatedStyle, useSharedValue, withRepeat, withSpring } from 'react-native-reanimated';

export function Star({ name, number, isDisabled }) {
  const StarAnimation = useSharedValue(0);
  const StarAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: StarAnimation.value }],
    };
  });

  useEffect(() => {
    StarAnimation.value = withRepeat(withSpring(1), -1, true);
  }, []);

  return (
    <C.Container animation={'bounceIn'}>
      <C.StarDust>{isDisabled ? <DisabledStarDust /> : <EnabledStarDust />}</C.StarDust>
      <C.StarButton disabled={isDisabled}>
        <C.StarContainer style={!isDisabled && StarAnimatedStyle}>
          {isDisabled ? <DisabledStar /> : <EnabledStar />}
        </C.StarContainer>
        <C.StarNumber isDisabled={isDisabled}>{number}</C.StarNumber>
        <C.StarSign isDisabled={isDisabled}>
          <C.StarName isDisabled={isDisabled}>{name}</C.StarName>
        </C.StarSign>
      </C.StarButton>
    </C.Container>
  );
}
