import { useRef, useState, useEffect } from 'react';
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

export function Avatar({
  id,
  name,
  image,
  price,
  isBuyable,
  isAcquired,
  isFirstItem,
  addUserAcquiredAvatar,
}) {
  const { loggedUser, updateLoggedUser } = useAuth();
  const [isSelected, setIsSelected] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('denying');
  const soundRef = useRef();

  async function buyAvatar() {
    setIsRequesting(true);

    if (!isBuyable) {
      setIsRequesting(false);
      setIsModalOpen(true);
      return;
    }

    const updatedCoins = loggedUser.coins - price;
    try {
      await updateLoggedUser('coins', updatedCoins);
      await addUserAcquiredAvatar(id);

      selectAvatar();
      setModalType('earning');
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsRequesting(false);
    }
  }

  async function selectAvatar() {
    try {
      await updateLoggedUser('avatar_id', id);
      soundRef.current.play();
    } catch (error) {
      console.error(error);
    } finally {
      setIsRequesting(false);
    }
  }

  function handleButtonPress() {
    setIsRequesting(true);

    if (isAcquired) {
      selectAvatar();
      return;
    }
    buyAvatar();
  }

  useEffect(() => {
    setIsSelected(id === loggedUser.avatar_id);
  }, [loggedUser.avatar_id]);

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
            <C.Text>Você pode adquirir mais completando estrelas ou resolvendo desafios</C.Text>
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
