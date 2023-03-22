import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { achievements as achievementsFromJSON } from '../../utils/achivements';
import { Achievement } from '../Achievement';

import { getImage } from '../../utils/getImage';
import ToastMenager, { Toast } from 'toastify-react-native';
import api from '../../services/api';
import * as C from './styles';

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
    try {
      const avatar = await api.getAvatar(loggedUser.avatar_id);
      setAvatar(avatar);
    } catch (error) {
      console.log(error);
    }
  }

  function sortByBlock(a, b) {
    const { unlocked_achievements_ids } = loggedUser;

    if (unlocked_achievements_ids.includes(a.id) && !unlocked_achievements_ids.includes(b.id)) {
      return 1;
    }
    if (!unlocked_achievements_ids.includes(a.id) && unlocked_achievements_ids.includes(b.id)) {
      return -1;
    }
    return 0;
  }

  async function getAchievements() {
    try {
      const achievements = await api.getAchievements();
      const sortedAchievements = [...achievements].sort(sortByBlock);
      setAchievements(sortedAchievements);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAvatar();
    getAchievements();
  }, [loggedUser.unlocked_achievements_ids]);

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
        renderItem={({ item: { id, name, description, icon, required_amount, metric } }) => (
          <Achievement
            id={id}
            name={name}
            description={description}
            icon={icon}
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
