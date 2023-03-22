import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

import CoinIcon from '../../assets/GlobalAssets/coin-icon.svg';
import RocketBackground from '../../assets/RocketAssets/rocket-background.png';
import RewardLight from '../../assets/animations/reward-light-animation.json';

import { Button } from '../Button';
import { Modal } from '../Modal';
import { Animation } from '../Animation';
import { Sound } from '../Sound';
import { SvgUri } from 'react-native-svg';
import { getImage } from '../../utils/getImage';

import theme from '../../global/styles/theme';
import * as C from './styles';

export function Rocket_({ id, name, image, price }) {
  const { loggedUser, updateLoggedUser } = useAuth();
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
    updateLoggedUser('coins', updatedCoins);
    updateLoggedUser('acquired_rockets_ids', updatedAcquiredRocketsIds);
  }

  function buyRocket() {
    if (loggedUser.coins < price) {
      setIsRequesting(false);
      setIsModalOpen(true);
      return;
    }

    const updatedCoins = loggedUser.coins - price;
    const updatedAcquiredRocketsIds = [...loggedUser.acquired_rockets_ids, id];

    updateUserData(updatedCoins, updatedAcquiredRocketsIds);
    selectRocket();
    setModalType('earning');
    setIsModalOpen(true);
  }

  async function selectRocket() {
    updateLoggedUser('rocket_id', id);
    setIsRequesting(false);
    soundRef.current.play();
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
    setIsSelected(id === loggedUser.rocket_id);
    setIsAcquired(loggedUser.acquired_rockets_ids.includes(id));
  }, [loggedUser.rocket_id, loggedUser.acquired_rockets_ids]);

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
          <SvgUri uri={getImage('rockets', image)} width={125} height={125} />
        </C.ImageContainer>
      </C.Background>
      <C.Info>
        <C.Name isSelected={isSelected}>{name}</C.Name>
        <Button
          title={isSelected && isAcquired ? 'Selecionado' : isAcquired ? 'Selecionar' : 'Comprar'}
          isLoading={isRequesting}
          isDisabled={(isSelected && isAcquired) || isRequesting}
          onPress={handleButton}
          color={theme.colors.black}
          background={theme.colors.yellow_300}
        />
      </C.Info>

      <Modal
        isVisible={isModalOpen}
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
