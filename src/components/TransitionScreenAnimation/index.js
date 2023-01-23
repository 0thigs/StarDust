import React from 'react';
import * as C from './styles';

import Home from '../../assets/GlobalAssets/transition-home-animation.json';
import Shop from '../../assets/GlobalAssets/transition-shop-animation.json';
import Profile from '../../assets/GlobalAssets/transition-profile-animation.json';
import LottieView from 'lottie-react-native';

export function TransitionScreenAnimation({ screen }) {
  const transitions = [
    { screen: 'home', animation: Home },
    { screen: 'shop', animation: Shop },
    { screen: 'profile', animation: Profile },
  ];

  function getTransition() {
    return transitions.find(transition => transition.screen === screen.toLowerCase()).animation;
  }

  return (
    <C.Container>
      <LottieView
        source={getTransition()}
        autoPlay={true}
        loop={true}
        duration={5000}
        style={{ width: 500, height: 500 }}
        renderMode={'cover'}
      />
    </C.Container>
  );
}
