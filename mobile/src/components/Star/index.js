import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useAuth } from '../../hooks/useAuth';
import { useScroll } from '../../hooks/useScroll';
import { useRocket } from '../../hooks/useRocket';
import * as C from './styles';

import LockedStar from '../../assets/StarAssets/locked-star.svg';
import UnlockedStar from '../../assets/animations/unlocked-star-animation.json';
import UnlockedStarDust from '../../assets/StarAssets/unlocked-stardust.svg';
import LockedStarDust from '../../assets/StarAssets/locked-stardust.svg';
import StarSound from '../../assets/sounds/star-sound.wav';

import LottieView from 'lottie-react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withDelay,
  withTiming,
  withSequence,
} from 'react-native-reanimated';
import { SvgUri } from 'react-native-svg';
import { Sound } from '../Sound';
import { getImage } from '../../utils/getImage';

export const starHeight = 100;

export function Star({ id, name, number, isUnlocked, isChallenge }) {
  const { loggedUser, updateLoggedUser } = useAuth();
  const { lastUnlockedStarId, lastUnlockedStarYPosition, setLastUnlockedStarYPosition } =
    useScroll();
  const isLastUnlockedStar = lastUnlockedStarId === id;

  const { rocket } = useRocket(loggedUser.rocket_id, isLastUnlockedStar);
  const starAnimation = useRef(null);
  const starSound = useRef(null);
  const delay = 300;

  const navigation = useNavigation();

  const StarScale = useSharedValue(1);
  const StarAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: StarScale.value }],
    };
  });

  function handleStarPress() {
    starAnimation.current.play(10, 50);
    starSound.current.play();

    setTimeout(() => {
      updateLoggedUser('starId', id, false);
      const screen = isChallenge ? 'Challenge' : 'Lesson';
      navigation.navigate(screen);
    }, 100);
  }

  const RocketRotate = useSharedValue(180);
  const RocketScale = useSharedValue(1);
  const RocketTranslateY = useSharedValue(-1000);
  const RocketAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${RocketRotate.value}deg` }, { scale: RocketScale.value }],
    };
  });

  useEffect(() => {
    StarScale.value = withRepeat(withSpring(1.15), isLastUnlockedStar ? -1 : 1, true);

    const timer = setTimeout(() => {
      RocketRotate.value = withTiming(540, { duration: 800 });
      RocketScale.value = withDelay(
        delay,
        withSequence(withTiming(1.25, { duration: 800 }), withTiming(1, { duration: 800 }))
      );
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <C.Container
      animation={'bounceIn'}
      onLayout={event => {
        if (isLastUnlockedStar) {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            setLastUnlockedStarYPosition(pageY);
          });
        }
      }}
    >
      <C.StarDust>{isUnlocked ? <LockedStarDust /> : <UnlockedStarDust />}</C.StarDust>
      <C.StarButton onPress={handleStarPress} disabled={isUnlocked}>
        <C.StarContainer style={!isUnlocked && StarAnimatedStyle}>
          {isUnlocked ? (
            <LockedStar width={100} height={85} />
          ) : (
            <LottieView
              ref={starAnimation}
              source={UnlockedStar}
              autoPlay={true}
              loop={false}
              duration={2500}
              style={{ width: 100, height: starHeight }}
              colorFilters={[{ keypath: 'Star 1', color: 'red' }]}
            />
          )}
        </C.StarContainer>
        <C.StarNumber isUnlocked={isUnlocked}>{number}</C.StarNumber>
        <>
          <C.StarSign isUnlocked={isUnlocked}>
            <C.StarName isUnlocked={isUnlocked}>{name}</C.StarName>
          </C.StarSign>
          {isLastUnlockedStar && rocket && (
            <C.Rocket style={RocketAnimatedStyle}>
              <SvgUri uri={getImage('rockets', rocket.image)} width={75} height={75} />
            </C.Rocket>
          )}
        </>
      </C.StarButton>
      <Sound ref={starSound} soundFile={StarSound} />
    </C.Container>
  );
}
