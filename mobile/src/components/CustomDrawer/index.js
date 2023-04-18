import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useAchievement } from '../../hooks/useAchievement';
import { useNavigation } from '@react-navigation/native';
import { Achievement } from '../Achievement';
import { PopoverMenu } from '../PopoverMenu';

import { UserAvatar } from '../UserAvatar';
import { Button } from '../Button';
import { MoreHorizontal } from 'react-native-feather';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function CustomDrawer() {
  const { signOut, loggedUser } = useAuth();
  const { achievements } = useAchievement(loggedUser.id);
  const [sortedAchievements, setSortedAchievements] = useState([]);
  const [sorter, setSorter] = useState('Ordem padrão');
  const navigation = useNavigation();

  function sortedAchievementsByLocking(a, b) {
    if (!a.isUnlocked && b.isUnlocked) {
      return -1; // b vem antes de a
    } else if (a.isUnlocked && !b.isUnlocked) {
      return 1; // b vem depois de a
    } else {
      return 0; // a e b são iguais em relação à isUnlocked
    }
  }

  function sortedAchievementsByUnlocking(a, b) {
    if (a.isUnlocked && !b.isUnlocked) {
      return -1; // a vem antes de b
    } else if (!a.isUnlocked && b.isUnlocked) {
      return 1; // a vem depois de b
    } else {
      return 0; // a e b são iguais em relação à isUnlocked
    }
  }

  function sortedAchievementsByPosition(a, b) {
    return a.position - b.position;
  }

  function sortAchievements(sorter) {
    setSorter(sorter);

    let sortedAchievements = [];
    switch (sorter) {
      case 'Ordem padrão':
        sortedAchievements = [...achievements].sort(sortedAchievementsByPosition);
        break;
      case 'Desbloqueadas':
        sortedAchievements = [...achievements].sort(sortedAchievementsByUnlocking);
        break;
      case 'Bloqueadas':
        sortedAchievements = [...achievements].sort(sortedAchievementsByLocking);
        break;
      default:
        return;
    }
    setSortedAchievements(sortedAchievements);
  }

  const popoverMenuButtons = [
    {
      title: 'Ordem padrão',
      isToggle: true,
      value: sorter === 'Ordem padrão',
      action: () => sortAchievements('Ordem padrão'),
    },
    {
      title: 'Desbloqueadas',
      isToggle: true,
      value: sorter === 'Desbloqueadas',
      action: () => sortAchievements('Desbloqueadas'),
    },
    {
      title: 'Bloqueadas',
      isToggle: true,
      value: sorter === 'Bloqueadas',
      action: () => sortAchievements('Bloqueadas'),
    },
  ];

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

  useEffect(() => {
    sortAchievements(sorter);
  }, [achievements]);

  return (
    <C.Container>
      <UserAvatar avatarId={loggedUser.avatar_id} size={100} />

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

      <C.Menu>
        <PopoverMenu
          buttons={popoverMenuButtons}
          icon={<MoreHorizontal color={theme.colors.green_300} />}
        />
      </C.Menu>

      <C.AchievementList
        data={sortedAchievements}
        keyExtractor={achievement => achievement.id}
        renderItem={({
          item: {
            id,
            name,
            description,
            icon,
            required_amount,
            metric,
            isUnlocked,
            position,
            reward,
          },
        }) => (
          <Achievement
            id={id}
            name={name}
            description={description}
            icon={icon}
            reward={reward}
            position={position}
            requiredAmount={required_amount}
            currentAmount={loggedUser[metric]}
            isUnlocked={isUnlocked}
            hasRescueFeat={true}
          />
        )}
      />
    </C.Container>
  );
}
