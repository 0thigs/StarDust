import { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Animation } from '../Animation';
import Transition from '../../assets/animations/transition-animation.json';
import * as C from './styles';
import { tips } from '../../utils/tips';

export function TransitionScreenAnimation() {
  const route = useRoute();

  function getRandomTip() {
    const randomNumber = Math.floor(Math.random() * (tips.length - 1 - 1 + 1)) + 1;
    return tips[randomNumber];
  }

  useEffect(() => {
    console.log(route);
  }, []);
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
      {route.name.includes('Challenge') && <C.Tip>Dica: {getRandomTip()}.</C.Tip>}
    </C.Container>
  );
}
