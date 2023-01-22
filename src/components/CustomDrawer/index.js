import { useState } from 'react';
import * as C from './styles';
import { achievements as achievementsFromDatabase } from '../../utils/achivements';
import { useAuth } from '../../hooks/useAuth';
import { Achievement } from '../Achievement';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'toastify-react-native';
import { useEffect } from 'react';

export function CustomDrawer() {
  const { signOut, user } = useAuth();
  const [achievements, setAchievements] = useState([]);
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
    setAchievements(achievementsFromDatabase);
  }, [user]);

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
        renderItem={({ item: { id, title, description, icon, goal, metric } }) => (
          <Achievement
            id={id}
            title={title}
            description={description}
            icon={icon}
            goal={goal}
            metric={user[metric]}
          />
        )}
      />
    </C.Container>
  );
}
