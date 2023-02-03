import { useEffect, useState, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useScroll } from '../../hooks/useScroll';
import { useWindowDimensions } from 'react-native';

import { Planet } from '../../components/Planet';
import { TransitionScreenAnimation } from '../../components/TransitionScreenAnimation';
import { Modal } from '../../components/Modal';
import { Achievement } from '../../components/Achievement';
import { Button } from '../../components/Button';
import { starHeight } from '../../components/Star';

import { getUnlockedAchievements } from '../../utils/achivements';
import { planets } from '../../utils/planets';

import BackgroundImage from '../../assets/HomeAssets/background.svg';
import RewardLight from '../../assets/ModalAssets/reward-light-animation.json';

import api from '../../services/api';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function Home() {
  const { user, setUser } = useAuth();
  const { lastUnlockedStarYPosition } = useScroll();

  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isFabButtonShown, setisFabButtonShown] = useState(false);
  const [isEndTrasition, setIsEndTransition] = useState(false);
  const scrollRef = useRef(null);
  const dimensions = useWindowDimensions();

  function verifyIfIsStarUnlocked(star) {
    if (user.unlocked_stars_ids.includes(star.id)) {
      return { ...star, isUnlocked: true };
    }
    return star;
  }

  function scrollToLastUnlockedStar() {
    scrollRef.current.scrollTo({
      x: 0,
      y: lastUnlockedStarYPosition - dimensions.height / 2,
      animated: true,
    });
  }

  function showFabButton({ contentOffset, layoutMeasurement }) {
    const isLastUnlockedStarOffScreen =
      (lastUnlockedStarYPosition - contentOffset.y).toFixed(0) > layoutMeasurement.height ||
      (lastUnlockedStarYPosition + starHeight - contentOffset.y).toFixed(0) < 0;

    if (isLastUnlockedStarOffScreen) {
      setisFabButtonShown(true);
    }
  }

  async function updateUnlockedAchievementsIds() {
    const unlockedAchievementsIds = unlockedAchievements.map(
      unlockedAchievement => unlockedAchievement.id
    );
    setUser(user => {
      return { ...user, unlocked_achievements_ids: unlockedAchievementsIds };
    });
    await api.updateUser('unlocked_achievements_ids', unlockedAchievementsIds, user.id);
  }

  useEffect(() => {
    setUnlockedAchievements(getUnlockedAchievements(user));
    const timer = setTimeout(() => setIsEndTransition(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    updateUnlockedAchievementsIds();
  }, [unlockedAchievements]);

  useEffect(() => {
    if (lastUnlockedStarYPosition) {
      scrollToLastUnlockedStar();
    }
  }, [lastUnlockedStarYPosition]);

  return (
    <C.Container
      ref={scrollRef}
      onScroll={event => showFabButton(event.nativeEvent)}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    >
      <C.Background>
        <BackgroundImage />
      </C.Background>
      {!isEndTrasition ? (
        <TransitionScreenAnimation />
      ) : (
        planets.map(({ id, name, icon, image, stars }) => (
          <Planet
            key={id}
            name={name}
            icon={icon}
            image={image}
            stars={stars.map(verifyIfIsStarUnlocked)}
          />
        ))
      )}

      {unlockedAchievements.length > 0 && (
        <Modal
          isOpen={isModalOpen}
          type={'earning'}
          title={'Uau! Parece que você ganhou recompensa(s)'}
          body={
            <C.Achievements>
              {unlockedAchievements.map(({ id, title, icon, description, goal, metric }) => (
                <C.AchievementContainer key={id}>
                  <C.Animation source={RewardLight} autoPlay={true} loop={true} />
                  <Achievement
                    key={id}
                    title={title}
                    description={description}
                    icon={icon}
                    goal={goal}
                    metric={user[metric]}
                    isUnlocked={true}
                  />
                </C.AchievementContainer>
              ))}
            </C.Achievements>
          }
          footer={
            <Button
              title={'Entendido'}
              color={theme.colors.black}
              background={theme.colors.green_500}
              onPress={() => setIsModalOpen(false)}
            />
          }
        />
      )}
    </C.Container>
  );
}
