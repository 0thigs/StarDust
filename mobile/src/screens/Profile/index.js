import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { ProfileStatus } from '../../components/ProfileStatus';
import { Statistic } from '../../components/Statistic';
import { Streak } from '../../components/Streak';
import { Animation } from '../../components/Animation';
import { Achievement } from '../../components/Achievement';
import { Loading } from '../../components/Loading';
import { achievements } from '../../utils/achivements';

import Missing from '../../assets/animations/missing-animation.json';
import * as C from './styles';
import api from '../../services/api';

export function Profile() {
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const { userId } = route.params;

  async function init() {
    setIsLoading(true);
    const user = await api.getUser(userId);
    const unlockedAchievements = achievements.filter(achivement =>
      user.unlocked_achievements_ids.includes(achivement.id)
    );
    setUnlockedAchievements(unlockedAchievements);
    setUser(user);
  }

  useEffect(() => {
    init();
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [userId]);

  return (
    <C.Container>
      {isLoading ? (
        <Loading isAnimation={true} />
      ) : (
        <C.Content>
          <ProfileStatus user={user} />
          <Statistic user={user} />
          <Streak user={user} />
          <C.Title>Conquistas</C.Title>
          <C.Achievements>
            {unlockedAchievements.length > 0 ? (
              unlockedAchievements.map(
                ({ id, title, description, icon, requiredCount, metric }) => (
                  <Achievement
                    key={id}
                    title={title}
                    description={description}
                    icon={icon}
                    requiredCount={requiredCount}
                    currentCount={user[metric]}
                    isUnlocked={true}
                  />
                )
              )
            ) : (
              <>
                <C.NoAchievements>Nenhuma consquista desbloquada ainda 😢</C.NoAchievements>
                <Animation source={Missing} autoPlay={true} loop={true} size={220} />
              </>
            )}
          </C.Achievements>
        </C.Content>
      )}
    </C.Container>
  );
}
