import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth.js';
import { Modal } from '../Modal';

import CoinIcon from '../../assets/GlobalAssets/coin-icon.svg';
import StreakAnimation from '../../assets/animations/streak-animation.json';
import theme from '../../global/styles/theme.js';
import * as C from './styles.js';
import { Button } from '../Button/index.js';

export function HeaderStatus() {
  const { loggedUser } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);

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
            onPress={() => setIsModalVisible(false)}
          />
        }
      />
    </C.Container>
  );
}
