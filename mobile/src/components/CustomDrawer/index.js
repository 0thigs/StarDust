import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useAvatar } from '../../hooks/useAvatar';
import { useAchievement } from '../../hooks/useAchievement';
import { useNavigation } from '@react-navigation/native';
import { Achievement } from '../Achievement';

import { getImage } from '../../utils/getImage';
import ToastMenager, { Toast } from 'toastify-react-native';
import * as C from './styles';

export function CustomDrawer() {
  const { signOut, loggedUser } = useAuth();
  const { avatar } = useAvatar(loggedUser.avatar_id);
  const { achievements } = useAchievement();
  const [sortedAchievements, setSortedAchievements] = useState([]);
  const navigation = useNavigation();

  function verifyIfIsUnlocked(id) {
    return loggedUser.unlocked_achievements_ids.includes(id);
  }

  async function handleSignOut() {
    try {
      await signOut();

      navigation.reset({
        routes: [{ name: 'SignIn' }],
      });
    } catch (error) {
      Toast.error('Falha ao tentar sair da conta');
    }
  }

  function sortByBlocking(a, b) {
    const { unlocked_achievements_ids } = loggedUser;

    if (unlocked_achievements_ids.includes(a.id) && !unlocked_achievements_ids.includes(b.id)) {
      return 1;
    }
    if (!unlocked_achievements_ids.includes(a.id) && unlocked_achievements_ids.includes(b.id)) {
      return -1;
    }
    return 0;
  }

//   useEffect(() => {
//     setIsLoading(true);
//     const sortedAchievements = [...achievements].sort(sortByBlocking);
//     setSortedAchievements(sortedAchievements);
//     if (sortedAchievements.length) setIsLoading(false);
//   }, [loggedUser.unlocked_achievements_ids]);

//   useEffect(() => {
//     if (sortedAchievements.length) setIsLoading(false);
//   }, [sortedAchievements]);

  return (
    <C.Container>
      <ToastMenager
        animationInTiming={700}
        animationOutTiming={1000}
        animationStyle={'rightInOut'}
        width={320}
        position="top"
      />

      <C.Avatar source={{ uri: getImage('avatars', avatar) }} />
      <C.Name>{loggedUser.name}</C.Name>
      <C.Email>{loggedUser.email}</C.Email>
      <C.LogOutButton onPress={handleSignOut}>
        <C.LogOutButtonText>Sair</C.LogOutButtonText>
      </C.LogOutButton>

        <C.AchievementList
          data={achievements}
          keyExtractor={achievement => achievement.id}
          renderItem={({
            item: { id, name, description, icon, required_amount, metric, reward },
          }) => (
            <Achievement
              id={id}
              name={name}
              description={description}
              icon={icon}
              reward={reward}
              requiredAmount={required_amount}
              currentAmount={loggedUser[metric]}
              isUnlocked={verifyIfIsUnlocked(id)}
              hasRescueFeat={true}
            />
          )}
        />
    </C.Container>
  );
}
