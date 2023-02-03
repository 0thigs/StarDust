import * as C from './styles';

import Crying from '../../assets/ModalAssets/crying-animation.json';
import Denying from '../../assets/ModalAssets/denying-animation.json';
import Earning from '../../assets/ModalAssets/earning-animation.json';


export function Modal({ isOpen, type = 'crying', title, body, footer }) {
  const animations = [
    { id: 'crying', animation: Crying },
    { id: 'denying', animation: Denying },
    { id: 'earning', animation: Earning },
  ];

  function getAnimation() {
    return animations.find(animation => animation.id === type.toLocaleLowerCase()).animation;
  }

  return (
    <C.Container transparent visible={isOpen} animationType={'fadeIn'}>
      <C.Fade>
        <C.Content animation={'flipInX'} duration={10}>
          <C.Header>
            <C.Title>{title}</C.Title>
            <C.Animation source={getAnimation()} autoPlay={true} loop={true} />
          </C.Header>
          <C.Body>{body}</C.Body>
          <C.Footer>{footer}</C.Footer>
        </C.Content>
      </C.Fade>
    </C.Container>
  );
}
