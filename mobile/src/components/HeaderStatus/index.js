import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth.js';
import { Modal } from '../Modal';

import CoinIcon from '../../assets/GlobalAssets/coin-icon.svg';
import StreakAnimation from '../../assets/animations/streak-animation.json';
import theme from '../../global/styles/theme.js';
import * as C from './styles.js';
import { Button } from '../Button/index.js';
import { Toast } from 'toastify-react-native';

export function HeaderStatus() {
  const { loggedUser, updateLoggedUser } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function onModalClose() {
    setIsLoading(true);

    try {
      await updateLoggedUser('did_break_streak', false);
      setIsModalVisible(false);
    } catch (error) {
      console.error(error);
      Toast.error('Falha interna no sistema');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (loggedUser.did_break_streak) setIsModalVisible(true);
  }, [loggedUser.did_break_streak]);

  return (
    <C.Container>
      <C.Streak
        source={StreakAnimation}
        autoPlay={true}
        loop={false}
        colorFilters={[{ keypath: '모양 레이어 1', color: theme.colors.green_500 }]}
      />
      <C.StreakCount>{loggedUser.streak}</C.StreakCount>
      <CoinIcon width={30} height={30} />
      <C.CoinsCount>{loggedUser.coins}</C.CoinsCount>

      <Modal
        type={'crying'}
        title={'Puxa, parece que você perdeu sua sequência de dias estudados 😢'}
        isVisible={isModalVisible}
        body={null}
        footer={
          <Button
            title={'Ok'}
            background={theme.colors.green_300}
            color={theme.colors.black}
            isDisabled={isLoading}
            isLoading={isLoading}
            onPress={onModalClose}
          />
        }
      />
    </C.Container>
  );
}
