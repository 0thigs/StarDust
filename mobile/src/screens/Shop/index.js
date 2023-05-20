import { useEffect, useState, useRef } from 'react';
import { useRocket } from '../../hooks/useRocket';
import { useAvatar } from '../../hooks/useAvatar';

import { Rocket } from '../../components/Rocket';
import { Loading } from '../../components/Loading';
import { AvatarsList } from '../../components/AvatarsList';

import * as C from './styles';

export function Shop() {
  const { avatars, addUserAcquiredAvatar } = useAvatar();
  const { rockets, addUserAcquiredRocket } = useRocket();
  const [isLoading, setIsLoading] = useState(true);
  const timer = useRef(null);

  useEffect(() => {
    if (avatars.length && rockets.length)
      timer.current = setTimeout(() => setIsLoading(false), 2000);
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
