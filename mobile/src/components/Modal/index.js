import { useEffect, useRef } from 'react';
import * as C from './styles';

import Crying from '../../assets/ModalAssets/crying-animation.json';
import Denying from '../../assets/ModalAssets/denying-animation.json';
import Earning from '../../assets/ModalAssets/earning-animation.json';
import Asking from '../../assets/ModalAssets/asking-animation.json';

import { Animation } from '../Animation';
import { Sound } from '../Sound';
import { ZoomIn, ZoomOut } from 'react-native-reanimated';

const effects = [
  {
    id: 'earning',
    animation: Earning,
    sound: require('../../assets/ModalAssets/earning-sound.wav'),
  },
  {
    id: 'crying',
    animation: Crying,
    sound: require('../../assets/ModalAssets/crying-sound.wav'),
  },
  {
    id: 'denying',
    animation: Denying,
    sound: require('../../assets/ModalAssets/denying-sound.wav'),
  },
  {
    id: 'asking',
    animation: Asking,
    sound: require('../../assets/ModalAssets/asking-sound.wav'),

  },
];

export function Modal({ isOpen, type = 'crying', title, body, footer }) {
  const { animation, sound } = effects.find(animation => animation.id === type.toLocaleLowerCase());
  const soundRef = useRef();

  useEffect(() => {
    if (isOpen) {
      soundRef.current.playSound();
    }
  }, [isOpen]);

  return (
    <C.Container transparent visible={isOpen}>
      <C.Fade>
        <C.Content entering={ZoomIn.duration(500)} exiting={ZoomOut.duration(500)}>
          <C.Header>
            <C.Title>{title}</C.Title>
            <Animation source={animation} autoPlay={true} loop={true} size={200} />
          </C.Header>
          <C.Body>{body}</C.Body>
          <C.Footer>{footer}</C.Footer>
        </C.Content>
      </C.Fade>
      <Sound ref={soundRef} soundFile={sound} />
    </C.Container>
  );
}