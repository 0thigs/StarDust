import * as C from './styles.js';

import CoinIcon from '../../assets/GlobalAssets/coin.svg';
import HeartIcon from '../../assets/GlobalAssets/heart.svg';
import { useAuth } from '../../hooks/useAuth.js';

export function HeaderStatus() {
const { signOut, user } = useAuth();

  return (
    <C.Container>
        <CoinIcon />
        <C.CoinsCount>20</C.CoinsCount>
        <HeartIcon />
        <C.HeartsCount>5</C.HeartsCount>
    </C.Container>
  );
}
