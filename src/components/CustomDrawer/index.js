import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import * as C from './styles';
import { achievements as achievementsFromJSON } from '../../utils/achivements';
import { Achievement } from '../Achievement';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'toastify-react-native';

export function CustomDrawer() {
  const { signOut, user } = useAuth();
  const [achievements, setAchievements] = useState([]);
    console.log(achievements);
  const navigation = useNavigation();

  async function handleSignOut() {
    const response = await signOut();
    if (response?.error) {
      Toast.error('Falha ao tentar sair da conta');
      return;
    }

    navigation.reset({
      routes: [{ name: 'SignIn' }],
    });
  }

  useEffect(() => {
    const sortedAchievements = achievementsFromJSON;
    sortedAchievements.sort((a, b) => {
      const aPriority = user.unlocked_achievements_ids.includes(a.id) ? 0 : 1;
      const bPriority = user.unlocked_achievements_ids.includes(b.id) ? 0 : 1;

      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }
      return a.id - b.id;
    });
    setAchievements(sortedAchievements);
  }, [user.unlocked_achievements_ids]);

  return (
    <C.Container>
      <C.Avatar source={{ uri: user.avatar }} />
      <C.Name>{user.name}</C.Name>
      <C.Email>{user.email}</C.Email>
      <C.LogOutButton onPress={handleSignOut}>
        <C.LogOutButtonText>Sair</C.LogOutButtonText>
      </C.LogOutButton>

      <C.AchievementList
        data={achievements}
        keyExtractor={achievement => achievement.id}
        renderItem={({ item: { id, title, description, icon, requiredCount, metric } }) => (
          <Achievement
            id={id}
            title={title}
            description={description}
            icon={icon}
            requiredCount={requiredCount}
            currentCount={user[metric]}
          />
        )}
      />
    </C.Container>
  );
}
