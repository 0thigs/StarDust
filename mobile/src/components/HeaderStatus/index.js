import { useAuth } from '../../hooks/useAuth.js';

import CoinIcon from '../../assets/GlobalAssets/coin-icon.svg';
import StreakAnimation from '../../assets/animations/streak-animation.json';
import theme from '../../global/styles/theme.js';
import * as C from './styles.js';

export function HeaderStatus() {
  const { loggedUser } = useAuth();

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
    </C.Container>
  );
}
