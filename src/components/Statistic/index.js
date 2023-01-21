import React from 'react';
import * as C from './styles';

import CoinIcon from '../../assets/GlobalAssets/coin-icon.svg';
import PlanetIcon from '../../assets/PlanetAssets/planet-image-1.svg';
import FlagIcon from '../../assets/GlobalAssets/flag-icon.svg';

export function Statistic() {
  return (
    <C.Container>
      <C.Statistic hasBorderRight={true}>
        <C.CountContainer>
          <CoinIcon width={30} height={30} />
          <C.Count>14</C.Count>
        </C.CountContainer>
        <C.Title>Estrelas completas</C.Title>
      </C.Statistic>
      <C.Statistic hasBorderRight={true}>
        <C.CountContainer>
          <PlanetIcon width={30} height={30} />
          <C.Count>14</C.Count>
        </C.CountContainer>
        <C.Title>Planetas concluídos</C.Title>
      </C.Statistic>
      <C.Statistic>
        <C.CountContainer>
          <FlagIcon width={30} height={30} />
          <C.Count>14</C.Count>
        </C.CountContainer>
        <C.Title>Conquistas adquiridas</C.Title>
      </C.Statistic>
    </C.Container>
  );
}
