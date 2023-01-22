import { useEffect, useState } from 'react';
import * as C from './styles';

import { useAuth } from '../../hooks/useAuth';

import { ProfileArea } from '../../components/ProfileArea';
import { Statistic } from '../../components/Statistic';
import { Streak } from '../../components/Streak';

import { achievements } from '../../utils/achivements';
import { Achievement } from '../../components/Achievement';

import Missing from '../../assets/GlobalAssets/missing-animation.json';
import LottieView from 'lottie-react-native';

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
        <ProfileArea user={user} />
        <Statistic user={user} />
        <Streak user={user} />
        <C.Title>Conquistas</C.Title>
        <C.Achievements>
          {unlockedAchievements.length > 0 ? (
            unlockedAchievements.map(({ id, title, description, icon, goal, metric }) => (
              <Achievement
                key={id}
                title={title}
                description={description}
                icon={icon}
                goal={goal}
                metric={user[metric]}
                isUnlocked={true}
              />
            ))
          ) : (
            <>
              <C.NoAchievements>
                Parace que você não desbloqueou nenhum conquista ainda 😢
              </C.NoAchievements>
              <LottieView
                source={Missing}
                autoPlay={true}
                loop={true}
                style={{
                  width: 220,
                  height: 220,
                }}
              />
            </>
          )}
        </C.Achievements>
      </C.Content>
    </C.Container>
  );
}
