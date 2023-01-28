import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { LifeBox } from '../../components/LifeBox';
import { Rocket } from '../../components/Rocket';
import { Modal } from '../../components/Modal';
import { Achievement } from '../../components/Achievement';
import { Button } from '../../components/Button';

import { rockets } from '../../utils/rockets';
import { getUnlockedAchievements } from '../../utils/achivements';

import * as C from './styles';

import api from '../../services/api';
import RewardLight from '../../assets/ModalAssets/reward-light-animation.json';
import theme from '../../global/styles/theme';

export function Shop() {
  const { user, setUser } = useAuth();
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [showModal, setShowModal] = useState(true);

  async function updateUnlockedAchievementsIds() {
    const unlockedAchievementsIds = unlockedAchievements.map(
      unlockedAchievement => unlockedAchievement.id
    );
    setUser(user => {
      return { ...user, unlocked_achievements_ids: unlockedAchievementsIds };
    });
    await api.updateUser('unlocked_achievements_ids', unlockedAchievementsIds, user.id);

    unlockedAchievements.length > 0 && setShowModal(true)
  }

  useEffect(() => {
    setUnlockedAchievements(getUnlockedAchievements(user));
    updateUnlockedAchievementsIds();
  }, [user.acquired_rockets_ids]);

  return (
    <C.Container>
      <C.Content>
        <C.Title>Foguetes</C.Title>
        <C.RocketList>
          {rockets.map(({ id, name, image, price }) => (
            <Rocket
              key={id}
              id={id}
              name={name}
              price={price}
              image={image}
              user={user}
              setUser={setUser}
            />
          ))}
        </C.RocketList>
        <C.Title>Vidas</C.Title>
        <C.LifeList horizontal showsHorizontalScrollIndicator={false}>
          <LifeBox lives={1} price={100} user={user} setUser={setUser} />
          <LifeBox lives={3} price={250} user={user} setUser={setUser} />
          <LifeBox lives={5} price={500} user={user} setUser={setUser} />
        </C.LifeList>
      </C.Content>

      {unlockedAchievements.length > 0 && (
        <Modal
          show={showModal}
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
              onPress={() => setShowModal(false)}
            />
          }
        />
      )}
    </C.Container>
  );
}
