import * as C from './styles';

import Wailing from '../../assets/GlobalAssets/wailing-animation.json';
import Denying from '../../assets/GlobalAssets/denying-animation.json';
import LottieView from 'lottie-react-native';

export function Modal({ show, type = 'wailing', title, body, footer }) {
  const animations = [
    { id: 'wailing', animation: Wailing },
    { id: 'denying', animation: Denying },
  ];

  function getAnimation() {
    return animations.find(animation => animation.id === type.toLocaleLowerCase()).animation;
  }

  return (
    <C.Container transparent visible={show} animationType={'fadeIn'}>
      <C.Fade>
        <C.Content>
          <C.Header>
            <C.Title>{title}</C.Title>
            <LottieView
              source={getAnimation()}
              autoPlay={true}
              loop={true}
              style={{
                width: 220,
                height: 220,
              }}
            />
          </C.Header>

          <C.Body>{body}</C.Body>
          <C.Footer>{footer}</C.Footer>
        </C.Content>
      </C.Fade>
    </C.Container>
  );
}
