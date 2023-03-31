import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useAvatar } from '../../hooks/useAvatar';
import { useAchievement } from '../../hooks/useAchievement';
import { useNavigation } from '@react-navigation/native';
import { Achievement } from '../Achievement';

import { getImage } from '../../utils/getImage';
import * as C from './styles';
import { UserAvatar } from '../UserAvatar';
import { Button } from '../Button';
import theme from '../../global/styles/theme';

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
      <UserAvatar avatar={avatar} size={100} />

      <C.Name>{loggedUser.name}</C.Name>
      <C.Email>{loggedUser.email}</C.Email>
      <C.Buttons>
        <C.ButtonWrapper>
          <Button
            title={'Sair'}
            color={theme.colors.black}
            background={theme.colors.green_500}
            onPress={handleSignOut}
            isSmall={true}
          />
        </C.ButtonWrapper>
      </C.Buttons>

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
