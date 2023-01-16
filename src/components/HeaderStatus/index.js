import * as C from './styles.js';

import CoinIcon from '../../assets/GlobalAssets/coin-icon.svg';
import LifeIcon from '../../assets/GlobalAssets/life-icon.svg';
import { useAuth } from '../../hooks/useAuth.js';

export function HeaderStatus() {
  const { user } = useAuth();

  return (
    <C.Container>
      <CoinIcon width={30} height={30} />
      <C.CoinsCount>{user.coins}</C.CoinsCount>
      <LifeIcon width={28} height={28} />
      <C.HeartsCount>{user.lives}</C.HeartsCount>
    </C.Container>
  );
}
