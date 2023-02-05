import * as C from './styles';

import Crying from '../../assets/ModalAssets/crying-animation.json';
import Denying from '../../assets/ModalAssets/denying-animation.json';
import Earning from '../../assets/ModalAssets/earning-animation.json';

import { Animation } from '../Animation';
import { ZoomIn, ZoomOut } from 'react-native-reanimated';

const animations = [
  { id: 'crying', animation: Crying },
  { id: 'denying', animation: Denying },
  { id: 'earning', animation: Earning },
];

export function Modal({ isOpen, type = 'crying', title, body, footer }) {
  function getAnimation() {
    return animations.find(animation => animation.id === type.toLocaleLowerCase()).animation;
  }

  return (
    <C.Container transparent visible={isOpen}>
      <C.Fade>
        <C.Content entering={ZoomIn.duration(500)} exiting={ZoomOut.duration(500)}>
          <C.Header>
            <C.Title>{title}</C.Title>
            <Animation
              source={getAnimation()}
              autoPlay={true}
              loop={true}
              size={200}
            />
          </C.Header>
          <C.Body>{body}</C.Body>
          <C.Footer>{footer}</C.Footer>
        </C.Content>
      </C.Fade>
    </C.Container>
  );
}
