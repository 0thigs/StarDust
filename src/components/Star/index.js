import React from 'react';
import * as C from './styles';

import EnabledStar from '../../assets/PlanetAssets/enabled-star.svg';
import DisabledStar from '../../assets/PlanetAssets/disabled-star.svg';
import EnabledStarDust from '../../assets/PlanetAssets/enabled-stardust.svg';
import DisabledStarDust from '../../assets/PlanetAssets/disabled-stardust.svg';

export function Star({ name, number, isDisabled }) {
  return (
    <C.Container>
      <C.StarDust>{isDisabled ? <DisabledStarDust /> : <EnabledStarDust />}</C.StarDust>
      <C.StarButton isDisabled={isDisabled}>
        {isDisabled ? <DisabledStar /> : <EnabledStar />}
        <C.StarNumber isDisabled={isDisabled}>{number}</C.StarNumber>
        <C.StarSign isDisabled={isDisabled}>
          <C.StarName isDisabled={isDisabled}>{name}</C.StarName>
        </C.StarSign>
      </C.StarButton>
    </C.Container>
  );
}
