import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

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

  async function selectAvatar() {
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
        
    </C.Container>
  );
}
