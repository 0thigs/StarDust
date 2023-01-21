import React from 'react';
import * as C from './styles';

import { useAuth } from '../../hooks/useAuth';
import { getRankingImage, getRankingName, } from '../../utils/rankings';

export function Profile() {
  const { user, setUser } = useAuth();
//   const RocketImage = getRankingImage(user.ranking_id);
//   const rankingName = getRankingName(user.ranking_id);

  return (
    <C.Container>
      {/* <C.ProfileArea>
        <C.Avatar />
        <C.Name>{user.name}</C.Name>
        <C.level>Nível 8 - 535XP</C.level>
        <C.Ranking>
          <C.RankingName>Supernova</C.RankingName>
        </C.Ranking>
        <C.Rocket>
          <RocketImage width={35} height={35} />
          <C.RocketName>Nova Explorer</C.RocketName>
        </C.Rocket>
      </C.ProfileArea> */}
    </C.Container>
  );
}
