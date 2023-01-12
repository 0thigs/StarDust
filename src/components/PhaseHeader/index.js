import React from 'react';
import * as C from './styles';

import CloseButtonIcon from '../../assets/GlobalAssets/close-button-icon.svg';
import LiveIcon from '../../assets/GlobalAssets/heart.svg';
import Rocket from '../../assets/GlobalAssets/rocket.png';

export function PhaseHeader() {
  return (
    <>
      <C.PhaseHeader>
        <C.CloseButton>
          <CloseButtonIcon width={35} height={35} />
        </C.CloseButton>
        <C.Lives>
          <LiveIcon width={30} height={30} />
          <C.LivesCount>5</C.LivesCount>
        </C.Lives>
      </C.PhaseHeader>
      <C.ProgressBar>
        <C.Bar>
          <C.Rocket source={Rocket} />
        </C.Bar>
      </C.ProgressBar>
    </>
  );
}
