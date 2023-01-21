import { useState, useEffect, useRef } from 'react';
import * as C from './styles';
import theme from '../../global/styles/theme';

import { useLesson } from '../../hooks/useLesson';
import { useAuth } from '../../hooks/useAuth';

import { Metric } from '../Metric';
import { Button } from '../Button';

import Coin from '../../assets/GlobalAssets/coin-icon.svg';
import XP from '../../assets/GlobalAssets/xp-icon.svg';
import Accurance from '../../assets/GlobalAssets/accurance-icon.svg';
import Time from '../../assets/GlobalAssets/time-icon.svg';

import Astronaut from '../../assets/LessonAssets/astrounaut-animation.json';
import Stars from '../../assets/LessonAssets/stars-animation.json';
import LottieView from 'lottie-react-native';

import api from '../../services/api';

import { useNavigation } from '@react-navigation/core';

export function End({ starId }) {
  const { user, setUser } = useAuth();
  const [state, dispatch] = useLesson();
  const [coins, setCoins] = useState(0);
  const [xp, setXp] = useState(0);
  const [time, setTime] = useState('');
  const [accurance, setAccurance] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const starsRef = useRef();
  const navigation = useNavigation();

  async function handleButtonClick() {
    setIsLoading(true);

    const updatedCoins = coins + user.coins;
    const updatedXp = xp + user.xp;

    const planets = await api.getPlanets();
    const nextStarId = planets.find(planet => planet.starsIds.includes())
    const updatedUnlockedStarsIds = [...user.unlocked_stars_ids, starId];

    setUser({
      ...user,
      coins: updatedCoins,
      xp: updatedXp,
      lives: state.livesCount,
      unlocked_stars_ids: updatedUnlockedStarsIds,
    });

    await api.updateCoins(updatedCoins, user.id);
    await api.updateXp(updatedXp, user.id);
    await api.updateUnlockedStarsIds(updatedUnlockedStarsIds, user.id);
    if (state.livesCount < user.lives) {
      await api.updateLives(state.livesCount, user.id);
      setUser({ ...user, lives: state.livesCount });
    }

    setTimeout(() => {
      dispatch({ type: 'resetState' });
      navigation.reset({
        routes: [{ name: 'DrawerRoutes' }],
      });
    }, 1000);
  }

  function convertSecondsToTime(seconds) {
    const date = new Date(0);
    date.setSeconds(seconds);
    const time = date.toISOString().substring(14, 19);
    return time;
  }

  function getAccurance() {
    const accurance = ((state.questions.length - state.wrongsCount) / state.questions.length) * 100;
    return accurance === 0 ? '100%' : accurance + '%';
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
    console.log(getAccurance());
    const AnimationUnitInSeconds = 15.4;
    const totalStars = (parseInt(getAccurance()) * 5) / 100;
    starsRef.current.play(0, AnimationUnitInSeconds * totalStars);
  }

  useEffect(() => {
    setCoins(getCoins());
    setXp(getXp());
    setTime(convertSecondsToTime(state.secondsCount));
    setAccurance(getAccurance());
    setStarsAnimation();
  }, []);

  return (
    <C.Container>
      <C.Message animation={'fadeInDown'}>Fase completada!</C.Message>
      <LottieView
        ref={starsRef}
        loop={false}
        duration={2500}
        source={Stars}
        style={{ width: 50, height: 50 }}
        colorFilters={[
          { keypath: 'Branco Sólido 1', color: theme.colors.background },
          { keypath: 'star1', color: theme.colors.yellow_300 },
          { keypath: 'star2', color: theme.colors.yellow_300 },
          { keypath: 'star3', color: theme.colors.yellow_300 },
          { keypath: 'star4', color: theme.colors.yellow_300 },
          { keypath: 'star5', color: theme.colors.yellow_300 },
        ]}
      />
      <LottieView
        source={Astronaut}
        autoPlay={true}
        loop={true}
        style={{ width: 350, height: 350 }}
      />
      <C.Metrics>
        <Metric
          title={'Poeira estelar'}
          count={coins}
          color={theme.colors.yellow_300}
          icon={<Coin width={35} height={35} />}
          delay={250}
          large
        />
        <Metric
          title={'Total XP'}
          color={theme.colors.green_500}
          icon={<XP width={35} height={35} />}
          count={xp}
          delay={500}
        />
        <Metric
          title={'Tempo'}
          color={theme.colors.blue_300}
          icon={<Time width={35} height={35} />}
          count={time}
          delay={750}
        />
        <Metric
          title={'Precisão'}
          color={theme.colors.red_300}
          icon={<Accurance width={35} height={35} />}
          count={accurance}
          delay={1000}
        />
      </C.Metrics>
      <Button title={'Continuar'} onPress={handleButtonClick} isLoading={isLoading} />
    </C.Container>
  );
}
