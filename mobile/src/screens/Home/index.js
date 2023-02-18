import { useEffect, useState, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useScroll } from '../../hooks/useScroll';
import { useAchievement } from '../../hooks/useAchievement';
import { useWindowDimensions } from 'react-native';

import { Planet } from '../../components/Planet';
import { TransitionScreenAnimation } from '../../components/TransitionScreenAnimation';
import { Modal } from '../../components/Modal';
import { Achievement } from '../../components/Achievement';
import { Button } from '../../components/Button';
import { starHeight } from '../../components/Star';
import { FabButton } from '../../components/FabButton';
import { Animation } from '../../components/Animation';
import { planets } from '../../utils/planets';

import BackgroundImage from '../../assets/HomeAssets/background.svg';
import RewardLight from '../../assets/ModalAssets/reward-light-animation.json';

import theme from '../../global/styles/theme';
import * as Icon from 'react-native-feather';
import * as C from './styles';

export function Home() {
  const { user } = useAuth();
  const { unlockedAchievements } = useAchievement();
  const { lastUnlockedStarYPosition } = useScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isfirstScroll, setIsfirstScroll] = useState(true);
  const [isFabButtonShown, setIsFabButtonShown] = useState(false);
  const [isEndTrasition, setIsEndTransition] = useState(false);
  const [direction, setDirection] = useState('');
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
    if (isfirstScroll) {
      setIsfirstScroll(false);
      return;
    }

    const isLastUnlockedStarAboveLayout =
      (lastUnlockedStarYPosition - contentOffset.y).toFixed(0) > layoutMeasurement.height;
    const isLastUnlockedStarBellowLayout =
      (lastUnlockedStarYPosition + starHeight - contentOffset.y).toFixed(0) < 0;

    setDirection(isLastUnlockedStarAboveLayout ? 'down' : 'up');
    setIsFabButtonShown(isLastUnlockedStarAboveLayout || isLastUnlockedStarBellowLayout);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEndTransition(true);
      setIsModalOpen(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (lastUnlockedStarYPosition) {
      scrollToLastUnlockedStar();
    }
  }, [lastUnlockedStarYPosition]);

  return (
    <>
      <C.Container
        ref={scrollRef}
        onScroll={event => showFabButton(event.nativeEvent)}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        isEndTrasition={isEndTrasition}
        contentContainerStyle={{
          flex: isEndTrasition ? 0 : 1,
          alignItems: 'center',
          paddingTop: 32,
          backgroundColor: theme.colors.background,
        }}
      >
        {!isEndTrasition ? (
          <TransitionScreenAnimation />
        ) : (
          <>
            <C.Background>
              <BackgroundImage />
            </C.Background>
            {planets.map(({ id, name, icon, image, stars }) => (
              <Planet
                key={id}
                name={name}
                icon={icon}
                image={image}
                stars={stars.map(verifyIfIsStarUnlocked)}
              />
            ))}
          </>
        )}
      </C.Container>
      {isFabButtonShown && (
        <FabButton
          onPress={scrollToLastUnlockedStar}
          icon={
            direction === 'up' ? (
              <Icon.ArrowUp color={theme.colors.green_300} fontSize={20} />
            ) : (
              <Icon.ArrowDown color={theme.colors.green_300} fontSize={20} />
            )
          }
        />
      )}

      {unlockedAchievements.length > 0 && (
        <Modal
          isOpen={isModalOpen}
          type={'earning'}
          title={'Uau! Parece que você ganhou recompensa(s)'}
          body={
            <C.Achievements>
              {unlockedAchievements.map(
                ({ id, title, icon, description, requiredCount, metric }) => (
                  <C.AchievementContainer key={id}>
                    <Animation
                      source={RewardLight}
                      autoPlay={true}
                      loop={true}
                      size={220}
                      isAbsolute={true}
                      top={-15}
                      left={-10}
                    />
                    <Achievement
                      key={id}
                      title={title}
                      description={description}
                      icon={icon}
                      requiredCount={requiredCount}
                      metric={user[metric]}
                      isUnlocked={true}
                    />
                  </C.AchievementContainer>
                )
              )}
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
    </>
  );
}
