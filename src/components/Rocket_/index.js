import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

import CoinIcon from '../../assets/GlobalAssets/coin-icon.svg';
import RocketBackground from '../../assets/RocketAssets/rocket-background.png';
import RewardLight from '../../assets/ModalAssets/reward-light-animation.json';

import { Button } from '../Button';
import { Modal } from '../Modal';
import { Animation } from '../Animation';
import { Sound } from '../Sound';

import api from '../../services/api';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function Rocket_({ id, name, image: Image, price }) {
  const { user, setUser } = useAuth();
  const [isSelected, setIsSelected] = useState(false);
  const [isAcquired, setIsAcquired] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('denying');
  const soundRef = useRef();

  const RocketPosition = useSharedValue(-5);

  const RocketAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: RocketPosition.value }],
    };
  });

  async function updateUserData(updatedCoins, updatedAcquiredRocketsIds) {
    setUser(user => {
      return { ...user, coins: updatedCoins, acquired_rockets_ids: updatedAcquiredRocketsIds };
    });

    try {
      await api.updateUser('coins', updatedCoins, user.id);
      await api.updateUser('acquired_rockets_ids', updatedAcquiredRocketsIds, user.id);
    } catch (error) {
      console.log(error);
    }
  }

  function buyRocket() {
    if (user.coins < price) {
      setIsRequesting(false);
      setIsModalOpen(true);
      return;
    }

    const updatedCoins = user.coins - price;
    const updatedAcquiredRocketsIds = [...user.acquired_rockets_ids, id];

    updateUserData(updatedCoins, updatedAcquiredRocketsIds);
    selectRocket();
    setModalType('earning');
    setIsModalOpen(true);
  }

  async function selectRocket() {
    setUser(user => {
      return { ...user, selected_rocket_id: id };
    });

    await api.updateUser('selected_rocket_id', id, user.id);
    setIsRequesting(false);
    soundRef.current.playSound();
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
      <C.Background source={RocketBackground}>
        {!isAcquired && (
          <C.Price>
            <CoinIcon width={30} height={30} />
            <C.Coins>{price}</C.Coins>
          </C.Price>
        )}
        <C.ImageContainer style={isSelected ? RocketAnimatedStyle : null}>
          <Image width={125} height={125} />
        </C.ImageContainer>
      </C.Background>
      <C.Info>
        <C.Name isSelected={isSelected}>{name}</C.Name>
        <Button
          title={isSelected && isAcquired ? 'Selecionado' : isAcquired ? 'Selecionar' : 'Comprar'}
          isDisabled={(isSelected && isAcquired) || isRequesting}
          onPress={handleButton}
          isLoading={isRequesting}
          color={theme.colors.black}
          background={theme.colors.yellow_300}
        />
      </C.Info>

      <Modal
        isOpen={isModalOpen}
        type={modalType}
        title={
          modalType === 'denying'
            ? 'Parece que você não tem poeira estelar o suficiente'
            : 'Parabéns, você acabou de adquiriu um novo foguete!'
        }
        body={
          modalType === 'denying' ? (
            <C.Text>Você pode adquirir mais completando estrelas</C.Text>
          ) : (
            <C.AcquiredRocket>
              <Animation
                source={RewardLight}
                autoPlay={true}
                loop={true}
                size={220}
                isAbsolute={true}
                top={-15}
                left={-8}
              />
              <Image width={100} height={100} />
              <C.Name>{name}</C.Name>
            </C.AcquiredRocket>
          )
        }
        footer={
          <Button
            title={'Entendido'}
            onPress={() => setIsModalOpen(false)}
            color={theme.colors.black}
            background={theme.colors.green_500}
          />
        }
      />

      <Sound ref={soundRef} soundFile={require('../../assets/RocketAssets/switch.sound.wav')} />
    </C.Container>
  );
}
