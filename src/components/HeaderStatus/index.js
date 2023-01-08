import * as C from './styles.js';

import CoinIcon from '../../assets/coin.svg';
import HeartIcon from '../../assets/heart.svg';

export function HeaderStatus() {
  return (
    <C.Container>
        <CoinIcon />
        <C.CoinsCount>250</C.CoinsCount>
        <HeartIcon />
        <C.HeartsCount>5</C.HeartsCount>
    </C.Container>
  );
}
