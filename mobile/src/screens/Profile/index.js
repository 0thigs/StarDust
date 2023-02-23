import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { ProfileStatus } from '../../components/ProfileStatus';
import { Statistic } from '../../components/Statistic';
import { Streak } from '../../components/Streak';
import { Animation } from '../../components/Animation';
import { Achievement } from '../../components/Achievement';
import { achievements } from '../../utils/achivements';

import Missing from '../../assets/GlobalAssets/missing-animation.json';
import * as C from './styles';

export function Profile() {
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const route = useRoute();
  const user = route.params.user;

  function getUnlockedAchievements() {
    const unlockedAchievements = achievements.filter(achivement =>
      user.unlocked_achievements_ids.includes(achivement.id)
    );
    setUnlockedAchievements(unlockedAchievements);
  }

  useEffect(() => {
    getUnlockedAchievements();
  }, [user]);

  return (
    <C.Container>
      <C.Content>
        <ProfileStatus user={user} />
        <Statistic user={user} />
        <Streak user={user} />
        <C.Title>Conquistas</C.Title>
        <C.Achievements>
          {unlockedAchievements.length > 0 ? (
            unlockedAchievements.map(({ id, title, description, icon, requiredCount, metric }) => (
              <Achievement
                key={id}
                title={title}
                description={description}
                icon={icon}
                requiredCount={requiredCount}
                currentCount={user[metric]}
                isUnlocked={true}
              />
            ))
          ) : (
            <>
              <C.NoAchievements>Nenhuma consquista desbloquada ainda 😢</C.NoAchievements>
              <Animation source={Missing} autoPlay={true} loop={true} size={220} />
            </>
          )}
        </C.Achievements>
      </C.Content>
    </C.Container>
  );
}
