import React from 'react';
import * as C from './styles';

import LockIcon from '../../assets/GlobalAssets/lock.svg';

export function Badge({ id, name, image: Image, currentRankingId }) {
  const isCurrentRanking = currentRankingId === id;
  const badgeSize = isCurrentRanking ? 100 : 75;
  const lockSize = 30;
  return (
    <C.Container>
      <Image width={badgeSize} height={badgeSize} />
      {id > currentRankingId && (
        <C.Lock>
          <LockIcon width={lockSize} height={lockSize} />
        </C.Lock>
      )}

      <C.Name>{isCurrentRanking && name}</C.Name>
    </C.Container>
  );
}
