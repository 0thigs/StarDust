import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useAchievement } from '../../hooks/useAchievement';

import { Modal } from '../../components/Modal';
import { Achievement } from '../../components/Achievement';
import { Button } from '../../components/Button';
import { Rocket_ } from '../../components/Rocket_';
import { rockets } from '../../utils/rockets';

import * as C from './styles';
import RewardLight from '../../assets/animations/reward-light-animation.json';
import theme from '../../global/styles/theme';

export function Shop() {
  const { loggedUser } = useAuth();
  const { unlockedAchievements } = useAchievement();
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <C.Container>
      <C.Content>
        <C.Title>Foguetes</C.Title>
        <C.RocketList>
          {rockets.map(({ id, name, image, price }) => (
            <Rocket_ key={id} id={id} name={name} price={price} image={image} />
          ))}
        </C.RocketList>
            {/* FIXME: 
         <C.Title>Vidas</C.Title>
        <C.LifeList horizontal showsHorizontalScrollIndicator={false}>
          <LifeBox lives={1} price={100} />
          <LifeBox lives={3} price={250} />
          <LifeBox lives={5} price={500} />
        </C.LifeList> */}
      </C.Content>

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
                    <C.Animation source={RewardLight} autoPlay={true} loop={true} />
                    <Achievement
                      key={id}
                      title={title}
                      description={description}
                      icon={icon}
                      requiredCount={requiredCount}
                      metric={loggedUser[metric]}
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

    </C.Container>
  );
}
