import React from 'react';
import * as C from './styles';

import TransitionAnimation from '../../assets/GlobalAssets/transition-animation.json';
import LottieView from 'lottie-react-native';

export function TransitionScreen() {
  return (
    <C.Container>
      <LottieView
        source={TransitionAnimation}
        autoPlay={true}
        loop={true}
        duration={5000}
        style={{ width: 500, height: 500 }}
        renderMode={'cover'}
      />
    </C.Container>
  );
}
