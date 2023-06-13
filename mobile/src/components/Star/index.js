import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useScroll } from '../../hooks/useScroll';

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
import { Toast } from 'toastify-react-native';
import * as C from './styles';
import api from '../../services/api';
const animationDuration = 800;
const delay = 300;
export const starHeight = 100;

export function Star({ id, name, number, isUnlocked, isChallenge, isLastUnlockedStar }) {
  const { rocket, setLastUnlockedStarYPosition } = useScroll();
  const starAnimation = useRef(null);
  const starSound = useRef(null);
  const navigation = useNavigation();

  const StarScale = useSharedValue(1);
  const StarAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: StarScale.value }],
    };
  });

  async function handleStarNavigation() {
    if (isChallenge) {
      try {
        const challengeId = await api.getChallengeId(id);
        navigation.navigate('Challenge', { id: challengeId });
      } catch (error) {
        Toast.error('Falha ao tentar acessar o desafio');
        console.log(error);
      }
    } else {
      navigation.navigate('Lesson', { id });
    }
  }

  function handleStarPress() {
    starAnimation.current.play(10, 50);
    starSound.current.play();
    setTimeout(() => {
      handleStarNavigation();
    }, 15);
  }

  const RocketRotate = useSharedValue(180);
  const RocketScale = useSharedValue(1);
  const RocketAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${RocketRotate.value}deg` }, { scale: RocketScale.value }],
    };
  });

  useEffect(() => {
    StarScale.value = withRepeat(withSpring(1.15), isLastUnlockedStar ? -1 : 1, true);

    const timer = setTimeout(() => {
      RocketRotate.value = withTiming(540, { duration: animationDuration });
      RocketScale.value = withDelay(
        delay,
        withSequence(
          withTiming(1.25, { duration: animationDuration }),
          withTiming(1, { duration: animationDuration })
        )
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
      <C.StarDust>{isUnlocked ? <UnlockedStarDust /> : <LockedStarDust />}</C.StarDust>
      <C.StarButton onPress={handleStarPress} isLoading={false} disabled={!isUnlocked}>
        <C.StarContainer style={isLastUnlockedStar && StarAnimatedStyle}>
          {isUnlocked ? (
            <LottieView
              ref={starAnimation}
              source={UnlockedStar}
              autoPlay={true}
              loop={false}
              duration={2500}
              style={{ width: 100, height: starHeight }}
            />
          ) : (
            <LockedStar width={100} height={85} />
          )}
          <C.StarContent isUnlocked={isUnlocked}>
            <C.StarNumber isUnlocked={isUnlocked}>{number}</C.StarNumber>
          </C.StarContent>
        </C.StarContainer>
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
