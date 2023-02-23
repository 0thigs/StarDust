import { useState, useEffect, useRef } from 'react';
import { useLesson } from '../../hooks/useLesson';
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/core';

import { Metric } from '../Metric';
import { Button } from '../Button';
import { Streak } from '../Streak';
import { Animation } from '../Animation';
import { Sound } from '../Sound';
import { planets } from '../../utils/planets';

import Coin from '../../assets/GlobalAssets/coin-icon.svg';
import XP from '../../assets/GlobalAssets/xp-icon.svg';
import Accurance from '../../assets/GlobalAssets/accurance-icon.svg';
import Time from '../../assets/GlobalAssets/time-icon.svg';
import Astronaut from '../../assets/LessonAssets/astrounaut-animation.json';
import Stars from '../../assets/LessonAssets/stars-animation.json';
import StreakAnimation from '../../assets/GlobalAssets/streak-animation.json';

import * as C from './styles';
import theme from '../../global/styles/theme';

export function End({ starId, isChallenge, _coins, _xp, _seconds }) {
  const { loggedUser, updateLoggedUser } = useAuth();
  const [state, dispatch] = useLesson();
  const [coins, setCoins] = useState(0);
  const [xp, setXp] = useState(0);
  const [time, setTime] = useState('');
  const [accurance, setAccurance] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStreakShown, setIsStreakShown] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(true);
  const starsRef = useRef();
  const soundRef = useRef();
  const navigation = useNavigation();
  const iconSize = 30;

  function getNewData() {
    const updatedCoins = coins + loggedUser.coins;
    const updatedXp = xp + loggedUser.xp;

    let completedPlanets = loggedUser.completed_planets;
    let updatedUnlockedStarsIds = loggedUser.unlocked_stars_ids;
    let nextPlanet = null;
    let nextStar = {};

    const currentPlanet = planets.find(planet => planet.stars.some(star => star.id === starId));
    const currentStar = currentPlanet.stars.find(star => star.id === starId);
    nextStar = currentPlanet.stars.find(star => star.number === currentStar.number + 1);

    if (!nextStar) {
      completedPlanets += 1;
      nextPlanet = planets[planets.indexOf(currentPlanet) + 1];
      nextStar = nextPlanet.stars[0];
    }

    if (!updatedUnlockedStarsIds.includes(nextStar.id)) {
      updatedUnlockedStarsIds.push(nextStar.id);
    }

    return {
      coins: updatedCoins,
      xp: updatedXp,
      lives: state.livesCount,
      unlocked_stars_ids: updatedUnlockedStarsIds,
      completed_planets: completedPlanets,
    };
  }

  async function updateUserData() {
    const newData = getNewData();
    for (key of Object.keys(newData)) {
      updateLoggedUser(key, newData[key]);
    }
  }

  function convertSecondsToTime(seconds) {
    const date = new Date(0);
    date.setSeconds(seconds);
    const time = date.toISOString().substring(14, 19);
    return time;
  }

  function getAccurance() {
    const accurance = ((state.questions.length - state.wrongsCount) / state.questions.length) * 100;
    return accurance === 0 ? '100%' : accurance.toFixed(1) + '%';
  }

  function getCoins() {
    let maxCoins = 50;
    for (let i = 0; i < state.wrongsCount; i++) {
      maxCoins -= 5;
    }
    return maxCoins;
  }

  function getXp() {
    let maxXp = 100;
    for (let i = 0; i < state.wrongsCount; i++) {
      maxXp -= 5;
    }
    return maxXp;
  }

  function setStarsAnimation() {
    const AnimationUnitInSeconds = 15.4;
    const totalStars = (parseInt(getAccurance()) * 5) / 100;
    starsRef.current.play(0, AnimationUnitInSeconds * isNaN(totalStars) ? 100 : totalStars);
  }

  function handleButtonClick() {
    if (isFirstClick) {
      setIsStreakShown(true);
      setIsFirstClick(false);
      updateUserData();
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      dispatch({ type: 'resetState' });
      navigation.reset({
        routes: [{ name: 'DrawerRoutes' }],
      });
    }, 1500);
  }

  useEffect(() => {
    if (isChallenge) {
      setCoins(_coins);
      setXp(_xp);
      setTime(convertSecondsToTime(_seconds));
    } else {
      setCoins(getCoins());
      setXp(getXp());
      setTime(convertSecondsToTime(state.secondsCount));
      setAccurance(getAccurance());
    }

    setStarsAnimation();
    soundRef.current.playSound();
  }, []);

  return (
    <C.Container>
      {isStreakShown ? (
        <>
          <Animation
            source={StreakAnimation}
            autoPlay={true}
            duration={3500}
            loop={false}
            size={250}
            colorFilters={[{ keypath: '모양 레이어 1', color: theme.colors.green_500 }]}
          />
          <Streak
            user={loggedUser}
            updateLoggedUser={updateLoggedUser}
            isToUpdateStreak={true}
          />
        </>
      ) : (
        <>
          <C.Message animation={'fadeInDown'}>Fase completada!</C.Message>
          <Animation
            ref={starsRef}
            loop={false}
            duration={2500}
            source={Stars}
            size={50}
            colorFilters={[
              { keypath: 'Branco Sólido 1', color: theme.colors.background },
              { keypath: 'star1', color: theme.colors.yellow_300 },
              { keypath: 'star2', color: theme.colors.yellow_300 },
              { keypath: 'star3', color: theme.colors.yellow_300 },
              { keypath: 'star4', color: theme.colors.yellow_300 },
              { keypath: 'star5', color: theme.colors.yellow_300 },
            ]}
          />
          <Animation source={Astronaut} autoPlay={true} loop={true} size={350} />
          <C.Metrics>
            <Metric
              title={'Poeira estelar'}
              count={coins}
              color={theme.colors.yellow_300}
              icon={<Coin width={iconSize} height={iconSize} />}
              delay={250}
              isLarge={true}
            />
            <Metric
              title={'Total XP'}
              color={theme.colors.green_500}
              icon={<XP width={iconSize} height={iconSize} />}
              count={xp}
              delay={500}
            />
            <Metric
              title={'Tempo'}
              color={theme.colors.blue_300}
              icon={<Time width={iconSize} height={iconSize} />}
              count={time}
              delay={750}
            />
            {!isChallenge && (
              <Metric
                title={'Precisão'}
                color={theme.colors.red_300}
                icon={<Accurance width={iconSize} height={iconSize} />}
                count={accurance}
                delay={1000}
              />
            )}
          </C.Metrics>
        </>
      )}

      <Button
        title={'Continuar'}
        onPress={handleButtonClick}
        isLoading={isLoading}
        color={theme.colors.black}
        background={theme.colors.green_500}
      />

      <Sound ref={soundRef} soundFile={require('../../assets/LessonAssets/end-sound.mp3')} />
    </C.Container>
  );
}
