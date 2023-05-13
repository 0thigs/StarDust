import { useState, useEffect, useRef } from 'react';
import { useLesson } from '../../hooks/useLesson';
import { useAuth } from '../../hooks/useAuth';
import { usePlanet } from '../../hooks/usePlanet';
import { useNavigation } from '@react-navigation/core';

import { Metric } from '../Metric';
import { Button } from '../Button';
import { Streak } from '../Streak';
import { Modal } from '../Modal';
import { Animation } from '../Animation';
import { Sound } from '../Sound';

import Coin from '../../assets/GlobalAssets/coin-icon.svg';
import XP from '../../assets/GlobalAssets/xp-icon.svg';
import Accurance from '../../assets/GlobalAssets/accurance-icon.svg';
import Time from '../../assets/GlobalAssets/time-icon.svg';
import Astronaut from '../../assets/animations/astrounaut-animation.json';
import Stars from '../../assets/animations/stars-animation.json';
import StreakAnimation from '../../assets/animations/streak-animation.json';

import * as C from './styles';
import theme from '../../global/styles/theme';
import dayjs from 'dayjs';
const iconSize = 25;

export function End({
  starId,
  challengeId,
  challengeCoins,
  challengeXp,
  challengeSeconds,
  isCompleted,
  addUserCompletedChallenges,
}) {
  const { loggedUser, updateLoggedUser } = useAuth();
  const { planets, getCurrentPlanet, getCurrentStar, getNextStar, addUnlockedStar } = usePlanet();
  const [state, dispatch] = useLesson();
  const [coins, setCoins] = useState(0);
  const [xp, setXp] = useState(0);
  const [hasNewLevel, setHasNewLevel] = useState(false);
  const [time, setTime] = useState('');
  const [accurance, setAccurance] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStreakVisible, setIsStreakVisible] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(true);
  const starsRef = useRef(null);
  const soundRef = useRef(null);
  const navigation = useNavigation();

  function getUpdatedLevel(updatedXp) {
    const hasNewLevel = updatedXp >= 50 * loggedUser.level + 25;
    if (hasNewLevel) {
      const newLevel = loggedUser.level + 1;
      setHasNewLevel(hasNewLevel);
      return newLevel;
    }
    return loggedUser.level;
  }

  async function getUpdatedData() {
    try {
      const updatedCoins = coins + loggedUser.coins;
      const updatedXp = xp + loggedUser.xp;
      const updatedWeeklyXp = xp + loggedUser.weekly_xp;
      const updatedLevel = getUpdatedLevel(updatedXp);
      let completedChallenges = loggedUser.completed_challenges;

      if (challengeId && !isCompleted) {
        await addUserCompletedChallenges(challengeId);
        completedChallenges++;
      }

      if (!starId) {
        return {
          coins: updatedCoins,
          xp: updatedXp,
          weekly_xp: updatedWeeklyXp,
          level: updatedLevel,
          completed_challenges: completedChallenges,
        };
      }

      let completedPlanets = loggedUser.completed_planets;
      const isCurrentStarUnlocked = getCurrentStar(starId).isUnlocked;
      let updatedUnlockedStars = loggedUser.unlocked_stars + isCurrentStarUnlocked ? 1 : 0;
      let nextStar = getNextStar(starId);

      if (!nextStar) {
        const currentPlanet = getCurrentPlanet(starId);
        const nextPlanet = planets.find(planet => planet.position === currentPlanet.position + 1);
        nextStar = nextPlanet ? nextPlanet.stars[0] : null;
        completedPlanets += nextPlanet ? 1 : 0;
      }

      if (nextStar && !nextStar.isUnlocked) {
        await addUnlockedStar(nextStar.id);
      }

      return {
        coins: updatedCoins,
        xp: updatedXp,
        weekly_xp: updatedWeeklyXp,
        level: updatedLevel,
        unlocked_stars: updatedUnlockedStars,
        completed_planets: completedPlanets,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async function updateUserData() {
    try {
      const newData = await getUpdatedData();
      await updateLoggedUser(newData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
    let maxCoins = !isCompleted ? 10 : 5;
    for (let i = 0; i < state.wrongsCount; i++) {
      maxCoins -= !isCompleted ? 5 : 2;
    }
    return maxCoins;
  }

  function getXp() {
    let maxXp = !isCompleted ? 20 : 10;
    for (let i = 0; i < state.wrongsCount; i++) {
      maxXp -= !isCompleted ? 2 : 1;
    }
    return maxXp;
  }

  function setStarsAnimation() {
    const AnimationUnitInSeconds = 15.4;
    const totalStars = starId ? (parseInt(getAccurance()) * 5) / 100 : 100;
    starsRef.current.play(0, AnimationUnitInSeconds * totalStars);
  }

  function handleButtonClick() {
    const todayIndex = dayjs().day();
    const today = loggedUser.week_status[todayIndex];
    console.log(today === 'todo');

    if (isFirstClick) {
      setIsModalVisible(true);
      setIsStreakVisible(today === 'todo');
      setIsFirstClick(false);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      if (starId) {
        dispatch({ type: 'resetState' });
        navigation.reset({
          routes: [{ name: 'DrawerRoutes' }],
        });
      } else {
        navigation.navigate('DrawerRoutes', {
          screen: 'TabRoutes',
          params: { screen: 'Challenges' },
        });
      }
    }, 250);
  }

  useEffect(() => {
    if (challengeId) {
      setCoins(challengeCoins);
      setXp(challengeXp);
      setTime(convertSecondsToTime(challengeSeconds));
    } else {
      setCoins(getCoins());
      setXp(getXp());
      setTime(convertSecondsToTime(state.secondsCount));
      setAccurance(getAccurance());
    }

    setStarsAnimation();
    soundRef.current.play();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (!planets.length) return;
    setTimeout(() => updateUserData(), 750);
  }, [planets]);

  return (
    <C.Container>
      {isFirstClick ? (
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
          <Animation source={Astronaut} autoPlay={true} loop={true} size={300} />
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
            {!challengeId && (
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
      ) : isStreakVisible ? (
        <>
          <Animation
            source={StreakAnimation}
            autoPlay={true}
            duration={3500}
            loop={false}
            size={250}
            colorFilters={[{ keypath: '모양 레이어 1', color: theme.colors.green_500 }]}
          />
          <Streak user={loggedUser} updateLoggedUser={updateLoggedUser} isToUpdateStreak={true} />
        </>
      ) : (
        <C.Message animation={'fadeInDown'}>Parabéns, continue assim 😉!</C.Message>
      )}

      <Button
        title={'Continuar'}
        onPress={handleButtonClick}
        isLoading={isLoading}
        isDisabled={isLoading}
        color={theme.colors.black}
        background={theme.colors.green_500}
      />

      <Modal
        isVisible={isModalVisible && hasNewLevel}
        type={'earning'}
        title={'Parabéns! Você alcançou um novo nível!'}
        body={
          <C.NewLevelMessage>
            <C.Text>Você acaba de chegar no </C.Text>
            <C.NewLevel>Nível {loggedUser.level} 😀</C.NewLevel>
            <C.Text>Continue assim!</C.Text>
          </C.NewLevelMessage>
        }
        footer={
          <Button
            title={'Legal'}
            color={theme.colors.black}
            background={theme.colors.green_500}
            onPress={() => setIsModalVisible(false)}
          />
        }
      />

      <Sound ref={soundRef} soundFile={require('../../assets/sounds/end-sound.mp3')} />
    </C.Container>
  );
}
