import { useEffect, useRef } from 'react';
import * as C from './styles';

import Crying from '../../assets/animations/crying-animation.json';
import Denying from '../../assets/animations/denying-animation.json';
import Earning from '../../assets/animations/earning-animation.json';
import Asking from '../../assets/animations/asking-animation.json';

import { Animation } from '../Animation';
import { Sound } from '../Sound';
import { ZoomIn, ZoomOut } from 'react-native-reanimated';

const effects = [
  {
    id: 'earning',
    animation: Earning,
    sound: require('../../assets/sounds/earning-sound.wav'),
  },
  {
    id: 'crying',
    animation: Crying,
    sound: require('../../assets/sounds/crying-sound.wav'),
  },
  {
    id: 'denying',
    animation: Denying,
    sound: require('../../assets/sounds/denying-sound.wav'),
  },
  {
    id: 'asking',
    animation: Asking,
    sound: require('../../assets/sounds/asking-sound.wav'),
  },
  {
    id: 'generic',
    animation: null,
    sound: null,
  },
];

export function Modal({ isVisible, type = 'generic', playSong = true, title, body, footer }) {
  const { animation, sound } = effects.find(animation => animation.id === type.toLocaleLowerCase());
  const soundRef = useRef(null);

  useEffect(() => {
    if (playSong && isVisible && type !== 'generic') {
      soundRef.current.play();
    }
  }, [isVisible]);

  return (
    <C.Container transparent visible={isVisible}>
      <C.Fade>
        <C.Content entering={ZoomIn.duration(500)} exiting={ZoomOut.duration(500)}>
          <C.Header>
            <C.Title>{title}</C.Title>
            {type !== 'generic' && (
              <Animation source={animation} autoPlay={true} loop={true} size={200} />
            )}
          </C.Header>
          <C.Body>{body}</C.Body>
          <C.Footer>{footer}</C.Footer>
        </C.Content>
        {type !== 'generic' && <Sound ref={soundRef} soundFile={sound} />}
      </C.Fade>
    </C.Container>
  );
}
