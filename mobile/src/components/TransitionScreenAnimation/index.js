import React from 'react';
import * as C from './styles';

import { Animation } from '../Animation';
import Transition from '../../assets/GlobalAssets/transition-animation.json';

export function TransitionScreenAnimation() {
  return (
    <C.Container>
      <Animation
        source={Transition}
        autoPlay={true}
        loop={true}
        duration={5000}
        size={500}
        renderMode={'cover'}
      />
    </C.Container>
  );
}
