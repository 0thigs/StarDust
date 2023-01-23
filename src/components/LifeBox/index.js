import React from 'react';
import * as C from './styles';

import CoinIcon from '../../assets/GlobalAssets/coin-icon.svg';
import LifeIcon from '../../assets/GlobalAssets/life-icon.svg';
import { Button } from '../Button';
import api from '../../services/api';

export function LifeBox({ lives, price, user, setUser }) {

  async function buyLives() {
    await api.buyLives(lives, user.id)

    setUser({...user, lives: user.lives + lives})
  }

  function handleButton() {
    if (user.coins < price) return;
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
      <Button title={'Comprar'} onPress={handleButton} color={'yellow'} />
    </C.Container>
  );
}