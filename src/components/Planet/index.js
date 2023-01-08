import React from 'react';
import * as C from './styles';

import { Star } from '../Star';
import { planetImages } from '../../utils/PlanetsImages';
import { planetIcons } from '../../utils/PlanetIcons';

export function Planet({ title, id }) {
  const PlanetImage = planetImages['planet' + id];
  const PlanetIcon = planetIcons['planet' + id];

  return (
    <C.Container>
      <C.PlanetInfo>
        <PlanetImage width={100} height={100} />
        <C.PlanetSign>
          <PlanetIcon />
          <C.PlanetName>{title}</C.PlanetName>
        </C.PlanetSign>
      </C.PlanetInfo>
      <Star name={'Conceito de lógica'} number={1} isDisabled={false} />
      <Star name={'O que é um programa'} number={2} isDisabled={true} />
      <Star name={'Entrada, processamento e saída'} number={3} isDisabled={true} />
      <Star name={'Entrada, processamento e saída'} number={4} isDisabled={true} />
    </C.Container>
  );
}
