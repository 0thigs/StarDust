import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useImageUri } from '../../hooks/useImageUri';
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

import CoinIcon from '../../assets/GlobalAssets/coin-icon.svg';
import RocketBackground from '../../assets/RocketAssets/rocket-background.png';
import RewardLight from '../../assets/animations/reward-light-animation.json';

import { Button } from '../Button';
import { Modal } from '../Modal';
import { Animation } from '../Animation';
import { Sound } from '../Sound';
import { SvgUri } from 'react-native-svg';

import theme from '../../global/styles/theme';
import * as C from './styles';

export function Rocket({ id, name, image, price, isAcquired, addUserAcquiredRocket }) {
  const { loggedUser, updateLoggedUser } = useAuth();
  const { imageUri } = useImageUri('rockets', image);
  const [isSelected, setIsSelected] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('denying');
  const soundRef = useRef();
  const isBuyable = loggedUser.coins >= price;

  const RocketPosition = useSharedValue(-5);

  const RocketAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: RocketPosition.value }],
    };
  });

  async function buyRocket() {
    if (!isBuyable) {
      setIsRequesting(false);
      setIsModalOpen(true);
      return;
    }

    const updatedCoins = loggedUser.coins - price;
    const updatedAcquiredRockets = loggedUser.acquired_rockets + 1;
    try {
      await Promise.all([
        updateLoggedUser({ coins: updatedCoins, acquired_rockets: updatedAcquiredRockets }),
        addUserAcquiredRocket(id),
        selectRocket(),
      ]);
      setModalType('earning');
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsRequesting(false);
    }
  }

  async function selectRocket() {
    try {
      await updateLoggedUser({ rocket_id: id });
      soundRef.current.play();
    } catch (error) {
      console.error(error);
    } finally {
      setIsRequesting(false);
    }
  }

  async function handleButtonPress() {
    setIsRequesting(true);

    if (isAcquired) {
      await selectRocket();
      return;
    }
    buyRocket();
  }

  useEffect(() => {
    RocketPosition.value = withRepeat(withTiming(5, { duration: 1000 }), -1, true);
  }, []);

  useEffect(() => {
    setIsSelected(id === loggedUser.rocket_id);
  }, [loggedUser.rocket_id]);

  return (
    <C.Container isSelected={isSelected} isAvailable={isAcquired || isBuyable}>
      <C.Background source={RocketBackground}>
        {!isAcquired && (
          <C.Price>
            <CoinIcon width={30} height={30} />
            <C.Coins>{price}</C.Coins>
          </C.Price>
        )}
        <C.ImageContainer style={isSelected ? RocketAnimatedStyle : null}>
          <SvgUri uri={imageUri} width={125} height={125} />
        </C.ImageContainer>
      </C.Background>
      <C.Info>
        <C.Name isSelected={isSelected}>{name}</C.Name>
        <Button
          title={isSelected && isAcquired ? 'Selecionado' : isAcquired ? 'Selecionar' : 'Comprar'}
          isLoading={isRequesting}
          isDisabled={(isSelected && isAcquired) || isRequesting}
          onPress={handleButtonPress}
          color={theme.colors.black}
          background={theme.colors.yellow_300}
        />
      </C.Info>

      <Modal
        isVisible={isModalOpen}
        type={modalType}
        playSong={true}
        title={
          modalType === 'denying'
            ? 'Parece que você não tem poeira estelar o suficiente'
            : 'Parabéns, você acabou de adquiriu um novo foguete!'
        }
        body={
          modalType === 'denying' ? (
            <C.Text>Você pode adquirir mais completando estrelas ou resolvendo desafios.</C.Text>
          ) : (
            <C.AcquiredRocket>
              <Animation
                source={RewardLight}
                autoPlay={true}
                loop={true}
                size={220}
                isAbsolute={true}
                top={-15}
                left={-10}
              />
              <SvgUri uri={imageUri} width={100} height={100} />
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
            isDisabled={modalType === 'denying' && isRequesting}
          />
        }
      />

      <Sound ref={soundRef} soundFile={require('../../assets/RocketAssets/switch.sound.wav')} />
    </C.Container>
  );
}
