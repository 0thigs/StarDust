import { useState, useCallback, useRef } from 'react';
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
  const route = useRoute();
  const { userId } = route.params;
  const { fetchAchievements } = useAchievement();
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const isFromLoggedUser = userId === loggedUser.id;
  const contentScrollRef = useRef(null);

  async function setProfileData() {
    try {
      setIsLoading(true);
      const user = await api.getUser(userId);
      setUser(user);
      const achievements = await fetchAchievements(userId);
      const unlockedAchievements = achievements.filter(achivement => achivement.isUnlocked);
      setUnlockedAchievements(unlockedAchievements);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        contentScrollRef.current.scrollTo({ x: 0, y: 0, animated: false });
        setIsLoading(false);
      }, 2000);
    }
  }

  function handleButtonPress() {
    navigation.navigate('Codes');
  }

  useFocusEffect(
    useCallback(() => {
      setUser(null);
      fetchAchievements(userId);
      setProfileData();
    }, [userId])
  );

  return (
    <C.Container>
      <C.Content
        ref={contentScrollRef}
        showsVerticalScrollIndicator={false}
        scrollEnabled={!isLoading}
      >
        {isLoading && <Loading isAnimation={true} hasScroll={true} />}
        {user && (
          <>
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
            <ChallengesGraph userId={user.id} />
            <Streak user={user} />
            <C.Title>Conquistas</C.Title>
            <C.Achievements>
              {unlockedAchievements.length ? (
                unlockedAchievements.map(
                  ({ id, name, description, icon, requiredCount, metric }) => (
                    <Achievement
                      key={id}
                      name={name}
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
          </>
        )}
      </C.Content>
    </C.Container>
  );
}
