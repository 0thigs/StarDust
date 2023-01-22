import { useEffect, useState } from 'react';
import * as C from './styles';

import { Planet } from '../../components/Planet';
import { TransitionScreenAnimation } from '../../components/TransitionScreenAnimation';
import { Modal } from '../../components/Modal';
import { Achievement } from '../../components/Achievement';

import BackgroundImage from '../../assets/HomeAssets/background.svg';

import { useAuth } from '../../hooks/useAuth';
import { getUnlockedAchievements } from '../../utils/achivements';

import api from '../../services/api';
import { Button } from '../../components/Button';
import theme from '../../global/styles/theme';

export function Home() {
  const { user, setUser } = useAuth();

  const [planets, setPlanets] = useState([]);
  const [stars, setStars] = useState([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [isEndTrasition, setIsEndTransition] = useState(false);

  function verifyIfIsStarUnlocked(star) {
    if (user.unlocked_stars_ids.includes(star.id)) {
      return { ...star, isUnlocked: true };
    }
    return star;
  }

  async function getPlanets() {
    const planets = await api.getPlanets();
    setPlanets(planets);
  }

  async function getStars() {
    const stars = await api.getStars();
    const updatedStars = stars.map(verifyIfIsStarUnlocked);
    setStars(updatedStars);
  }

  async function updateUnlockedAchievementsIds() {
    const unlockedAchievementsIds = unlockedAchievements.map(achievement => achievement.id);
    setUser(user => {
      return { ...user, unlocked_achievements_ids: unlockedAchievementsIds };
    });
  console.log(unlockedAchievementsIds);
    await api.updateUnlockedAchievementsIds(unlockedAchievementsIds, user.id);
  }

  useEffect(() => {
    getPlanets();
    getStars();
    setUnlockedAchievements(getUnlockedAchievements(user));
    setTimeout(() => setIsEndTransition(true), 3000);
  }, []);

  useEffect(() => {
    updateUnlockedAchievementsIds();
  }, [unlockedAchievements]);

  return (
    <C.Container>
      <C.Background>
        <BackgroundImage />
      </C.Background>
      {!isEndTrasition ? (
        <TransitionScreenAnimation />
      ) : (
        <C.PlanetsList
          data={planets}
          keyExtractor={planet => planet.id}
          renderItem={({ item }) => (
            <Planet
              id={item.id}
              title={item.title}
              currentPlanetStarsIds={item.stars_ids}
              stars={stars}
            />
          )}
        />
      )}

      {unlockedAchievements.length > 0 && (
        <Modal
          show={showModal}
          type={'earning'}
          title={'Uau! Parece que você ganhou recompensa(s)'}
          body={
            <C.Achievements>
              {unlockedAchievements.map(({ id, title, icon, description, goal, metric }) => (
                <Achievement
                  key={id}
                  title={title}
                  description={description}
                  icon={icon}
                  goal={goal}
                  metric={user[metric]}
                  isUnlocked={true}
                />
              ))}
            </C.Achievements>
          }
          footer={
            <Button
              title={'Entendido'}
              color={theme.colors.black}
              background={theme.colors.green_500}
              onPress={() => setShowModal(false)}
            />
          }
        />
      )}
    </C.Container>
  );
}
