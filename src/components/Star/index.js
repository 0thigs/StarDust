import { useEffect, useRef } from 'react';
import * as C from './styles';

import DisabledStar from '../../assets/StarAssets/disabled-star.svg';
import EnabledStarDust from '../../assets/StarAssets/enabled-stardust.svg';
import DisabledStarDust from '../../assets/StarAssets/disabled-stardust.svg';

import EnabledStar from '../../assets/StarAssets/enabled-star.json';

import LottieView from 'lottie-react-native';

import { useAnimatedStyle, useSharedValue, withRepeat, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/core';

export function Star({ name, number, isDisabled }) {
  const starAnimation = useRef(null);

  const navigation = useNavigation();

  function HandleStarClick() {
    starAnimation.current.play(10, 50);
    setTimeout(() => {
      navigation.reset({
        routes: [{ name: 'Lesson' }],
      });
    }, 500);
  }

  const StarScale = useSharedValue(1);
  const StarAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: StarScale.value }],
    };
  });

  useEffect(() => {
    StarScale.value = withRepeat(withSpring(1.1), -1, true);
  }, []);

  return (
    <C.Container animation={'bounceIn'}>
      <C.StarDust>{isDisabled ? <DisabledStarDust /> : <EnabledStarDust />}</C.StarDust>
      <C.StarButton onPress={HandleStarClick} disabled={isDisabled}>
        <C.StarContainer style={!isDisabled && StarAnimatedStyle}>
          {isDisabled ? (
            <DisabledStar width={100} height={85} />
          ) : (
            <LottieView
              ref={starAnimation}
              source={EnabledStar}
              autoPlay={true}
              loop={false}
              duration={2500}
              style={{ width: 100, height: 100 }}
              colorFilters={[{ keypath: 'Star 1', color: 'red' }]}
            />
          )}
        </C.StarContainer>
        <C.StarNumber isDisabled={isDisabled}>{number}</C.StarNumber>
        <C.StarSign isDisabled={isDisabled}>
          <C.StarName isDisabled={isDisabled}>{name}</C.StarName>
        </C.StarSign>
      </C.StarButton>
    </C.Container>
  );
}
