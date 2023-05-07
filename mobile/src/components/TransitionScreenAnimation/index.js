import { useRoute } from '@react-navigation/native';
import { Animation } from '../Animation';
import Transition from '../../assets/animations/transition-animation.json';
import { tips } from '../../utils/tips';
import * as C from './styles';

export function TransitionScreenAnimation() {
  const route = useRoute();

  function getRandomTip() {
    const randomNumber = Math.floor(Math.random() * (tips.length - 1 - 1 + 1)) + 1;
    return tips[randomNumber];
  }

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
