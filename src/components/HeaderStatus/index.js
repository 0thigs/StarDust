import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth.js';
import { useLesson } from '../../hooks/useLesson.js';

import CoinIcon from '../../assets/GlobalAssets/coin-icon.svg';
import LifeIcon from '../../assets/GlobalAssets/life-icon.svg';
import * as C from './styles.js';

export function HeaderStatus() {
  const { user } = useAuth();
  const [state] = useLesson();

  async function updateStatus() {
    if (state.livesCount < user.lives) {
      await api.updateLives(state.livesCount, user.id);
      setUser({ ...user, lives: state.livesCount });
    }
  }

  useEffect(() => {
    // updateStatus();
  }, []);

  return (
    <C.Container>
      <CoinIcon width={30} height={30} />
      <C.CoinsCount>{user.coins}</C.CoinsCount>
      <LifeIcon width={28} height={28} />
      <C.HeartsCount>{user.lives}</C.HeartsCount>
    </C.Container>
  );
}
