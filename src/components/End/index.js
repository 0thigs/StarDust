import * as C from './styles';

import Astronaut from '../../assets/LessonAssets/astrounaut.json';
import LottieView from 'lottie-react-native';

export function End() {
  return (
    <C.Container>
      <C.Message>Fase completada!</C.Message>
      <LottieView
        source={Astronaut}
        autoPlay={true}
        loop={true}
        style={{ width: 350, height: 350 }}
      />
      <C.CoinsContainer>
        <C.CoinsHeader>Poeira estelar</C.CoinsHeader>
        <C.CoinsCount>15</C.CoinsCount>
      </C.CoinsContainer>
      <C.Metrics>
        <C.Metric />
        <C.Metric />
        <C.Metric />
      </C.Metrics>
    </C.Container>
  );
}
