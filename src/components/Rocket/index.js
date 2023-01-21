import React, { useEffect, useState } from 'react';
import * as C from './styles';

import { rocketImages } from '../../utils/rocketImages';
import CoinIcon from '../../assets/GlobalAssets/coin-icon.svg';
import RocketBackground from '../../assets/RocketAssets/rocket-background.png';

import { Button } from '../Button';

import api from '../../services/api';
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

export function Rocket({ id, name, price, user, setUser }) {
  const [isSelected, setIsSelected] = useState(false);
  const [isAcquired, setIsAcquired] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const RocketImage = rocketImages['rocket' + id];

  const RocketPosition = useSharedValue(-5);

  const RocketAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: RocketPosition.value }],
    };
  });

  async function buyRocket() {
    if (user.coins < price) {
      setIsRequesting(false);
      return;
    }
    const updatedAcquiredRocketsIds = [...user.acquired_rockets_ids, id];

    setUser(user => {
      return { ...user, acquired_rockets_ids: updatedAcquiredRocketsIds };
    });

    await api.updateAcquiredRocketsIds(updatedAcquiredRocketsIds, user.id);

    selectRocket();
  }

  async function selectRocket() {
    setUser(user => {
      return { ...user, selected_rocket_id: id };
    });

    await api.updateSelectedRocketId(id, user.id);

    setIsRequesting(false);
  }

  function handleButton() {
    setIsRequesting(true);

    if (isAcquired) {
      selectRocket();
      return;
    }
    buyRocket();
  }

  useEffect(() => {
    RocketPosition.value = withRepeat(withTiming(5, { duration: 1000 }), -1, true);
  }, []);

  useEffect(() => {
    setIsSelected(id === user.selected_rocket_id);
    setIsAcquired(user.acquired_rockets_ids.includes(id));
  }, [user.selected_rocket_id, user.acquired_rockets_ids]);

  return (
    <C.Container isSelected={isSelected} isAcquired={isAcquired}>
      <C.RocketBackground source={RocketBackground}>
        {!isAcquired && (
          <C.Price>
            <CoinIcon width={30} height={30} />
            <C.Coins>{price}</C.Coins>
          </C.Price>
        )}
        <C.RocketImageContainer style={isSelected && RocketAnimatedStyle}>
          <RocketImage width={125} height={125} />
        </C.RocketImageContainer>
      </C.RocketBackground>
      <C.Info>
        <C.Name isSelected={isSelected}>{name}</C.Name>
        <Button
          title={isSelected && isAcquired ? 'Selecionado' : isAcquired ? 'Selecionar' : 'Comprar'}
          color={'yellow'}
          isDisabled={(isSelected && isAcquired) || isRequesting}
          onPress={handleButton}
          isLoading={isRequesting}
        />
      </C.Info>
    </C.Container>
  );
}
