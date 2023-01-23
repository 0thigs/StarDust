import * as C from './styles';

import { useAuth } from '../../hooks/useAuth';

import { ProfileArea } from '../../components/ProfileArea';
import { Statistic } from '../../components/Statistic';
import { Streak } from '../../components/Streak';
import { Achievement } from '../../components/Achievement';

export function Profile() {
  const { user } = useAuth();

  return (
    <C.Container>
      <C.Content>
        <ProfileArea user={user} />
        <Statistic user={user} />
        <Streak user={user} />

        <C.Title>Conquistas</C.Title>
        <C.Achievements>
          <Achievement
            id={1}
            title={'Começando a viagem'}
            description={'Termine a primeira fase do StarDust'}
            isGotten={true}
          />
          <Achievement
            id={2}
            title={'Início da exploração'}
            description={'Completo o primeiro planeta do StarDust'}
            isGotten={true}
          />
          <Achievement
            id={3}
            title={'100 XP'}
            description={'Ganhe 100 XP'}
            isGotten={true}
          />
          <Achievement
            id={4}
            title={'Coletor de estrelas'}
            description={'Complete 5 fases'}
            isGotten={true}
          />
        </C.Achievements>
      </C.Content>
    </C.Container>
  );
}