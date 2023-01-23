import { useState } from 'react';
import * as C from './styles';

import CoinIcon from '../../assets/GlobalAssets/coin-icon.svg';
import LifeIcon from '../../assets/GlobalAssets/life-icon.svg';
import { Button } from '../Button';
import { Modal } from '../Modal';
import theme from '../../global/styles/theme';
import api from '../../services/api';

export function LifeBox({ lives, price, user, setUser }) {
  const [isBuying, setIsBuying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  async function buyLives() {
    const newLives = user.lives + lives;
    await api.updateUserData('lives', newLives, user.id);
    setUser(user => {
      return { ...user, lives: newLives };
    });
    setIsBuying(false);
  }

  function handleButton() {
    setIsBuying(true);
    if (user.coins < price) {
      setShowModal(true);
      return;
    }
    buyLives();
  }

  return (
    <C.Container>
      <C.Price>
        <CoinIcon width={30} height={30} />
        <C.Coins>{price}</C.Coins>
      </C.Price>
      <C.Life>
        <LifeIcon width={40} height={40} />
        <C.Lives>{lives}</C.Lives>
      </C.Life>
      <Button
        title={'Comprar'}
        onPress={handleButton}
        isDisabled={isBuying}
        color={theme.colors.black}
        background={theme.colors.yellow_300}
      />

      <Modal
        show={showModal}
        type={'denying'}
        title={'Parece que você não tem poeira estelar o suficiente'}
        body={<C.Text>Você pode adquirir mais completando estrelas</C.Text>}
        footer={
          <Button
            title={'Entendido'}
            onPress={() => setShowModal(false)}
            color={theme.colors.black}
            background={theme.colors.green_500}
            isLoading={isBuying}
          />
        }
      />
    </C.Container>
  );
}
