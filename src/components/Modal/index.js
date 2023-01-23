import * as C from './styles';

import Crying from '../../assets/ModalAssets/crying-animation.json';
import Denying from '../../assets/ModalAssets/denying-animation.json';
import Earning from '../../assets/ModalAssets/earning-animation.json';

import LottieView from 'lottie-react-native';

export function Modal({ show, type = 'crying', title, body, footer }) {
  const animations = [
    { id: 'crying', animation: Crying },
    { id: 'denying', animation: Denying },
    { id: 'earning', animation: Earning },
  ];

  function getAnimation() {
    return animations.find(animation => animation.id === type.toLocaleLowerCase()).animation;
  }

  return (
    <C.Container transparent visible={show} animationType={'fadeIn'}>
      <C.Fade>
        <C.Content animation={'flipInX'} duration={10}>
          <C.Header>
            <C.Title>{title}</C.Title>
            <LottieView
              source={getAnimation()}
              autoPlay={true}
              loop={true}
              style={{
                width: 170,
                height: 170,
              }}
            />
          </C.Header>
          <C.Body>
            {body}
          </C.Body>
          <C.Footer>{footer}</C.Footer>
        </C.Content>
      </C.Fade>
    </C.Container>
  );
}
