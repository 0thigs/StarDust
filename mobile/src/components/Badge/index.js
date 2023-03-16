import React from 'react';
import * as C from './styles';

import LockIcon from '../../assets/GlobalAssets/lock.svg';
import { SvgUri } from 'react-native-svg';
import { getImage } from '../../utils/getImage';

export function Badge({ index, name, image, currentRankingIndex }) {
  const isCurrentRanking = currentRankingIndex === index;
  const badgeSize = isCurrentRanking ? 100 : 75;
  const lockSize = 30;
  return (
    <C.Container>
      <SvgUri uri={getImage('rankings', image)} width={badgeSize} height={badgeSize} />
      {index > currentRankingIndex && (
        <C.Lock>
          <LockIcon width={lockSize} height={lockSize} />
        </C.Lock>
      )}

      <C.Name>{isCurrentRanking && name}</C.Name>
    </C.Container>
  );
}
