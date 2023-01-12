import * as C from './styles.js';

import CoinIcon from '../../assets/GlobalAssets/coin.svg';
import HeartIcon from '../../assets/GlobalAssets/heart.svg';
import { useAuth } from '../../hooks/useAuth.js';

export function HeaderStatus() {
const { signOut, user } = useAuth();

  return (
    <C.Container>
        <CoinIcon />
        <C.CoinsCount>{user.coins}</C.CoinsCount>
        <HeartIcon />
        <C.HeartsCount>{user.lives}</C.HeartsCount>
    </C.Container>
  );
}
