import { useEffect, useState } from 'react';
import * as C from './styles';

import { useAuth } from '../../hooks/useAuth';

import { ProfileStatus } from '../../components/ProfileStatus';
import { Statistic } from '../../components/Statistic';
import { Streak } from '../../components/Streak';

import { achievements } from '../../utils/achivements';
import { Achievement } from '../../components/Achievement';

import Missing from '../../assets/GlobalAssets/missing-animation.json';

export function Profile() {
  const { user } = useAuth();
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  console.log(unlockedAchievements);

  function getUnlockedAchievements() {
    const unlockedAchievements = achievements.filter(achivement =>
      user.unlocked_achievements_ids.includes(achivement.id)
    );
    setUnlockedAchievements(unlockedAchievements);
  }

  useEffect(() => {
    getUnlockedAchievements();
  }, [user.unlocked_achievements_ids]);

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
              <C.NoAchievements>
                Parace que você não desbloqueou nenhuma conquista ainda 😢
              </C.NoAchievements>
              <Animation
                source={Missing}
                autoPlay={true}
                loop={true}
                size={220}
              />
            </>
          )}
        </C.Achievements>
      </C.Content>
    </C.Container>
  );
}
