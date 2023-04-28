import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useRocket } from '../../hooks/useRocket';
import { useAvatar } from '../../hooks/useAvatar';
import { useAchievement } from '../../hooks/useAchievement';

import { Modal } from '../../components/Modal';
import { Achievement } from '../../components/Achievement';
import { Button } from '../../components/Button';
import { Rocket } from '../../components/Rocket';
import { Loading } from '../../components/Loading';
import { AvatarsList } from '../../components/AvatarsList';

import * as C from './styles';
import RewardLight from '../../assets/animations/reward-light-animation.json';
import theme from '../../global/styles/theme';
import { useRef } from 'react';

export function Shop() {
  const { avatars, addUserAcquiredAvatar } = useAvatar();
  const { rockets, addUserAcquiredRocket } = useRocket();
  const [isLoading, setIsLoading] = useState(true);
  const timer = useRef(null);

  useEffect(() => {
    if (avatars.length && rockets.length)
      timer.current = setTimeout(() => setIsLoading(false), 1500);
  }, [avatars, rockets]);

  return (
    <C.Container>
      <C.Content showsVerticalScrollIndicator={false} scrollEnabled={!isLoading}>
        {isLoading && <Loading isAnimation={true} hasScroll={true} />}
        {rockets.length > 0 && avatars.length > 0 && (
          <>
            <C.Title>Foguetes</C.Title>
            <C.RocketList>
              {rockets.map(({ id, name, image, price, isAcquired }) => (
                <Rocket
                  key={id}
                  id={id}
                  name={name}
                  price={price}
                  image={image}
                  isAcquired={isAcquired}
                  addUserAcquiredRocket={addUserAcquiredRocket}
                />
              ))}
            </C.RocketList>
            <C.Title>Avatares</C.Title>
            <AvatarsList avatars={avatars} addUserAcquiredAvatar={addUserAcquiredAvatar} />
          </>
        )}
      </C.Content>
    </C.Container>
  );
}
