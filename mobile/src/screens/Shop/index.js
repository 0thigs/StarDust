import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useAchievement } from '../../hooks/useAchievement';

import { Modal } from '../../components/Modal';
import { Achievement } from '../../components/Achievement';
import { Button } from '../../components/Button';
import { Rocket_ } from '../../components/Rocket_';

import * as C from './styles';
import RewardLight from '../../assets/animations/reward-light-animation.json';
import theme from '../../global/styles/theme';
import api from '../../services/api';
import { Loading } from '../../components/Loading';
import { Avatar } from '../../components/Avatar';
import { useRef } from 'react';

export function Shop() {
  const { loggedUser } = useAuth();
  const { unlockedAchievements } = useAchievement();
  const [rockets, setRockets] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const avatarsListRef = useRef(null);

  function scrollTo(index) {
    avatarsListRef.current.scrollToIndex({
      index,
      animated: true,
    });
  }

  async function setShopData() {
    try {
      const rockets = await api.getRockets();
      setRockets(rockets);

      const avatars = await api.getAvatars();
      setAvatars(avatars);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    setShopData();
  }, []);

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
            <C.AvatarsList
              ref={avatarsListRef}
              data={avatars}
              keyExtractor={avatar => avatar.id}
              renderItem={({ item: { id, name, image, price }, index }) => (
                <Avatar
                  id={id}
                  name={name}
                  price={price}
                  image={image}
                  index={index}
                  scrollTo={scrollTo}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRigth: 12 }}
            />
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
