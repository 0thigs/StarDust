import { useEffect, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useScroll } from '../../hooks/useScroll';
import * as C from './styles';

import DisabledStar from '../../assets/StarAssets/disabled-star.svg';
import EnabledStarDust from '../../assets/StarAssets/enabled-stardust.svg';
import DisabledStarDust from '../../assets/StarAssets/disabled-stardust.svg';

import EnabledStar from '../../assets/StarAssets/enabled-star.json';

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
import { useNavigation } from '@react-navigation/core';
import { rockets } from '../../utils/rockets';

export const starHeight = 100;

export function Star({ id, name, number, isDisabled, isChallenge }) {
  const { user, setUser } = useAuth();
  const { lastUnlockedStarId, lastUnlockedStarYPosition, setLastUnlockedStarYPosition } =
    useScroll();
  const isLastStarUnlocked = lastUnlockedStarId === id;
  const starAnimation = useRef(null);
  const delay = 300;
  const RocketImage = rockets.find(rocket => rocket.id === user.selected_rocket_id).image;

  const navigation = useNavigation();

  const StarScale = useSharedValue(1);
  const StarAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: StarScale.value }],
    };
  });

  function HandleStarClick() {
    starAnimation.current.play(10, 50);

    setTimeout(() => {
      setUser({ ...user, starId: id });
      const screen = isChallenge ? 'Challenge' : 'Lesson';
      navigation.navigate(screen);
    }, delay);
  }

  const RocketRotate = useSharedValue(180);
  const RocketScale = useSharedValue(1);
  const RocketTranslateY = useSharedValue(-1000);
  const RocketAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${RocketRotate.value}deg` },
        { scale: RocketScale.value },
        { translateY: -RocketTranslateY.value },
      ],
    };
  });

  useEffect(() => {
    StarScale.value = withRepeat(withSpring(1.15), isLastStarUnlocked ? -1 : 1, true);
    RocketTranslateY.value = withSpring(lastUnlockedStarYPosition, { duration: 800 });

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
        if (isLastStarUnlocked) {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            setLastUnlockedStarYPosition(pageY);
          });
        }
      }}
    >
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
              style={{ width: 100, height: starHeight }}
              colorFilters={[{ keypath: 'Star 1', color: 'red' }]}
            />
          )}
        </C.StarContainer>
        <C.StarNumber isDisabled={isDisabled}>{number}</C.StarNumber>
        <>
          <C.StarSign isDisabled={isDisabled}>
            <C.StarName isDisabled={isDisabled}>{name}</C.StarName>
          </C.StarSign>
          {isLastStarUnlocked && (
            <C.Rocket style={RocketAnimatedStyle}>
              <RocketImage width={75} height={75} />
            </C.Rocket>
          )}
        </>
      </C.StarButton>
    </C.Container>
  );
}
