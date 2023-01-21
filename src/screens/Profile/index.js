import * as C from './styles';

import { useAuth } from '../../hooks/useAuth';

import { ProfileArea } from '../../components/ProfileArea';
import { Statistic } from '../../components/Statistic';
import { Streak } from '../../components/Streak';

export function Profile() {
  const { user } = useAuth();

  return (
    <C.Container>
      <ProfileArea user={user} />
      <Statistic user={user} />
      <Streak user={user} />
    </C.Container>
  );
}
