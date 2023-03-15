import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import * as C from './styles';
import { achievements as achievementsFromJSON } from '../../utils/achivements';
import { Achievement } from '../Achievement';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'toastify-react-native';
import api from '../../services/api';
import { getImage } from '../../utils/getImage';

export function CustomDrawer() {
  const { signOut, loggedUser } = useAuth();
  const [avatar, setAvatar] = useState('');
  const [achievements, setAchievements] = useState([]);
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

  async function getAvatar() {
    const avatar = await api.getAvatar(loggedUser.avatar_id);
    setAvatar(avatar);
  }

  useEffect(() => {
    const sortedAchievements = achievementsFromJSON;
    const { unlocked_achievements_ids } = loggedUser;
    sortedAchievements.sort((a, b) => {
      if (unlocked_achievements_ids.includes(a.id) && !unlocked_achievements_ids.includes(b.id)) {
        return 1;
      }
      if (!unlocked_achievements_ids.includes(a.id) && unlocked_achievements_ids.includes(b.id)) {
        return -1;
      }
      return 0;
    });
    setAchievements(sortedAchievements);
    getAvatar();
  }, [loggedUser.unlocked_achievements_ids]);

  return (
    <C.Container>
      <C.Avatar source={{ uri: getImage('avatars', avatar) }} />
      <C.Name>{loggedUser.name}</C.Name>
      <C.Email>{loggedUser.email}</C.Email>
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
            currentCount={loggedUser[metric]}
            isUnlocked={verifyIfIsUnlocked(id)}
          />
        )}
      />
    </C.Container>
  );
}
