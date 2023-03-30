import { useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import CoinIcon from '../../assets/GlobalAssets/coin-icon.svg';
import RewardLight from '../../assets/animations/reward-light-animation.json';

import { Button } from '../Button';
import { Modal } from '../Modal';
import { Animation } from '../Animation';
import { Sound } from '../Sound';
import { getImage } from '../../utils/getImage';
import { Lock } from 'react-native-feather';

import theme from '../../global/styles/theme';
import * as C from './styles';

export function Avatar({ id, name, image, price, isSelected, isBuyable, isAcquired, isFirstItem }) {
  const { loggedUser, updateLoggedUser } = useAuth();
  const [isRequesting, setIsRequesting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('denying');
  const soundRef = useRef();

  async function updateUserData(updatedCoins, updatedAcquiredAvatarsIds) {
    updateLoggedUser('coins', updatedCoins);
    updateLoggedUser('acquired_avatars_ids', updatedAcquiredAvatarsIds);
  }

  function buyAvatar() {
    if (!isBuyable) {
      setIsRequesting(false);
      setIsModalOpen(true);
      return;
    }

    const updatedCoins = loggedUser.coins - price;
    const updatedAcquiredAvatarsIds = [...loggedUser.acquired_avatars_ids, id];
    updateUserData(updatedCoins, updatedAcquiredAvatarsIds);
    selectAvatar();
    setModalType('earning');
    setIsModalOpen(true);
  }

  async function selectAvatar() {
    updateLoggedUser('avatar_id', id);
    setIsRequesting(false);
    soundRef.current.play();
  }

  function handleButtonPress() {
    setIsRequesting(true);

    if (isAcquired) {
      selectAvatar();
      return;
    }
    buyAvatar();
  }

  return (
    <C.Container
      isSelected={isSelected}
      isAvailable={isAcquired || isBuyable}
      isFirstItem={isFirstItem}
    >
      <C.Info>
        {!isAcquired && price > 0 && (
          <C.Price>
            <CoinIcon width={30} height={30} />
            <C.Coins>{price}</C.Coins>
          </C.Price>
        )}

        <C.Name>{name}</C.Name>
        <Button
          title={isSelected && isAcquired ? 'Selecionado' : isAcquired ? 'Selecionar' : 'Comprar'}
          color={theme.colors.black}
          background={theme.colors.yellow_300}
          isLoading={isRequesting}
          isDisabled={(isSelected && isAcquired) || isRequesting}
          onPress={handleButtonPress}
        />
      </C.Info>

      <C.Image source={{ uri: getImage('avatars', image) }} />
      {!isAcquired && price > 0 && (
        <C.Icon>
          <Lock width={50} color={theme.colors.gray_900} />
        </C.Icon>
      )}

      <Modal
        isVisible={isModalOpen}
        type={modalType}
        title={
          modalType === 'denying'
            ? 'Parece que você não tem poeira estelar o suficiente'
            : 'Parabéns, você acabou de adquiriu um novo avatar!'
        }
        body={
          modalType === 'denying' ? (
            <C.Text>Você pode adquirir mais completando estrelas</C.Text>
          ) : (
            <C.AcquiredAvatar>
              <Animation
                source={RewardLight}
                autoPlay={true}
                loop={true}
                size={350}
                isAbsolute={true}
                top={-15}
                left={-15}
              />
              <C.AcquiredAvatarImage source={{ uri: getImage('avatars', image) }} />
              <C.Name>{name}</C.Name>
            </C.AcquiredAvatar>
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