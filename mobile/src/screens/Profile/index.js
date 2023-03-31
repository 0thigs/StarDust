import { useState, useCallback } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useAchievement } from '../../hooks/useAchievement';
import { useRoute, useFocusEffect, useNavigation } from '@react-navigation/native';

import { ProfileStatus } from '../../components/ProfileStatus';
import { Statistic } from '../../components/Statistic';
import { Streak } from '../../components/Streak';
import { Animation } from '../../components/Animation';
import { Achievement } from '../../components/Achievement';
import { Button } from '../../components/Button';
import { ChallengesGraph } from '../../components/ChallengesGraph';
import { Loading } from '../../components/Loading';

import Missing from '../../assets/animations/missing-animation.json';
import * as C from './styles';
import api from '../../services/api';
import theme from '../../global/styles/theme';

export function Profile() {
  const { loggedUser } = useAuth();
  const { achievements } = useAchievement();
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params;
  const isFromLoggedUser = userId === loggedUser.id;

  async function setProfileData() {
    try {
      setIsLoading(true);
      const user = await api.getUser(userId);
      const unlockedAchievements = achievements.filter(achivement =>
        user.unlocked_achievements_ids.includes(achivement.id)
      );

      setUnlockedAchievements(unlockedAchievements);
      setUser(user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleButtonPress() {
    navigation.navigate('Codes');
  }

  useFocusEffect(
    useCallback(() => {
      setProfileData();
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }, [userId])
  );

  return (
    <C.Container>
      {isLoading || !user ? (
        <Loading isAnimation={true} />
      ) : (
        <C.Content>
          <ProfileStatus user={user} isFromLoggedUser={isFromLoggedUser} />
          <Statistic user={user} />
          {isFromLoggedUser && (
            <Button
              title={'Ver meus códigos'}
              color={theme.colors.black}
              background={theme.colors.green_500}
              onPress={handleButtonPress}
            />
          )}
          <C.Title>Desafios concluídos</C.Title>
          <ChallengesGraph />
          <Streak user={user} />
          <C.Title>Conquistas</C.Title>
          <C.Achievements>
            {unlockedAchievements?.length ? (
              unlockedAchievements.map(({ id, name, description, icon, requiredCount, metric }) => (
                <Achievement
                  key={id}
                  name={name}
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
      )}
    </C.Container>
  );
}
