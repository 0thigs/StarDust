import * as C from './styles';

import { Metric } from '../Metric';
import { Button } from '../Button';

import theme from '../../global/styles/theme';

import Coin from '../../assets/GlobalAssets/coin-icon.svg';
import XP from '../../assets/GlobalAssets/xp-icon.svg';
import Accurance from '../../assets/GlobalAssets/accurance-icon.svg';
import Time from '../../assets/GlobalAssets/time-icon.svg';

import Astronaut from '../../assets/LessonAssets/astrounaut-animation.json';
import Stars from '../../assets/LessonAssets/stars-animation.json'
import LottieView from 'lottie-react-native';

export function End() {
  return (
    <C.Container>
      <C.Message>Fase completada!</C.Message>
      <LottieView
        source={Stars}
        autoPlay={true}
        loop={true}
        style={{ width: 50, height: 50 }}
        colorFilters={[
            { keypath: 'Branco Sólido 1', color: theme.colors.background },
            { keypath: 'star1', color: theme.colors.yellow_300 },
            { keypath: 'star2', color: theme.colors.yellow_300 },
            { keypath: 'star3', color: theme.colors.yellow_300 },
            { keypath: 'star4', color: theme.colors.yellow_300 },
            { keypath: 'star5', color: theme.colors.yellow_300 },
          ]}
      />
      <LottieView
        source={Astronaut}
        autoPlay={true}
        loop={true}
        style={{ width: 350, height: 350 }}
      />
      <C.Metrics>
        <Metric
          title={'Poeira estelar'}
          count={'40'}
          color={theme.colors.yellow_300}
          icon={<Coin width={35} height={35} />}
          large
        />
        <Metric
          title={'Total XP'}
          color={theme.colors.blue_300}
          icon={<XP width={35} height={35} />}
          count={'20'}
        />
        <Metric
          title={'Tempo'}
          color={theme.colors.green_500}
          icon={<Time width={35} height={35} />}
          count={'1:45'}
        />
        <Metric
          title={'Precisão'}
          color={theme.colors.red_300}
          icon={<Accurance width={35} height={35} />}
          count={'87%'}
        />
      </C.Metrics>
      <Button title={'Continuar'} />
    </C.Container>
  );
}
