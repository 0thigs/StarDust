import * as C from './styles';

import { Planet } from '../../components/Planet';
import BackgroundImage from '../../assets/HomeAssets/background.svg';

export function Home() {
  return (
    <C.Container>
      <C.Background>
        <BackgroundImage />
      </C.Background>
      <Planet title={'introdução'} id={1} />
      <Planet title={'tipods de dados'} id={2} />
      <Planet title={'variáveis'} id={3} />
    </C.Container>
  );
}
