import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useRocket } from '../../hooks/useRocket';
import { useAvatar } from '../../hooks/useAvatar';
import { useAchievement } from '../../hooks/useAchievement';

import { Modal } from '../../components/Modal';
import { Achievement } from '../../components/Achievement';
import { Button } from '../../components/Button';
import { Rocket_ } from '../../components/Rocket_';
import { Loading } from '../../components/Loading';
import { AvatarsList } from '../../components/AvatarsList';

import * as C from './styles';
import RewardLight from '../../assets/animations/reward-light-animation.json';
import theme from '../../global/styles/theme';


export function Shop() {
  const { loggedUser } = useAuth();
  const { avatars } = useAvatar();
  const { rockets } = useRocket();
  const { unlockedAchievements } = useAchievement();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const avatarsListRef = useRef(null);

  function scrollTo(index) {
    avatarsListRef.current.scrollToIndex({
      index,
      animated: true,
    });
  }

  useEffect(() => {
    if (avatars.length && rockets.length) setIsLoading(false);
  }, [avatars, rockets]);

  return (
    <C.Container>
      <C.Content isLoading={isLoading}>
        {isLoading ? (
          <Loading isAnimation={true} />
        ) : (
          <>
            <C.Title>Foguetes</C.Title>
            <C.RocketList>
              {rockets.map(({ id, name, image, price }) => (
                <Rocket_ key={id} id={id} name={name} price={price} image={image} />
              ))}
            </C.RocketList>

            <C.Title>Avatares</C.Title>
            <AvatarsList avatars={avatars}  />
          </>
        )}
      </C.Content>

      {unlockedAchievements.length > 0 && (
        <Modal
          isVisible={isModalVisible}
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
              onPress={() => setIsModalVisible(false)}
            />
          }
        />
      )}
    </C.Container>
  );
}
