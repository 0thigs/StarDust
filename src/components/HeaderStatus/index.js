import * as C from './styles.js';

import CoinIcon from '../../assets/GlobalAssets/coin-icon.svg';
import LifeIcon from '../../assets/GlobalAssets/life-icon.svg';
import { useAuth } from '../../hooks/useAuth.js';

export function HeaderStatus() {
const { user } = useAuth();

  return (
    <C.Container>
        <CoinIcon />
        <C.CoinsCount>{user.coins}</C.CoinsCount>
        <LifeIcon />
        <C.HeartsCount>{user.lives}</C.HeartsCount>
    </C.Container>
  );
}
