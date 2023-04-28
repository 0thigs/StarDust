import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useAchievement } from '../../hooks/useAchievement';
import { useNavigation } from '@react-navigation/native';
import { Achievement } from '../Achievement';
import { PopoverMenu } from '../PopoverMenu';

import { UserAvatar } from '../UserAvatar';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Animation } from '../../components/Animation';
import { MoreHorizontal } from 'react-native-feather';
import { Toast } from 'toastify-react-native';

import RewardLight from '../../assets/animations/reward-light-animation.json';
import theme from '../../global/styles/theme';
import * as C from './styles';
import { metricsExceptions } from '../../utils/achievementsMetricsExceptions';

export function CustomDrawer() {
  const { signOut, loggedUser } = useAuth();
  const {
    achievements,
    newUnlockedAchievements,
    setNewUnlockedAchievements,
    removeRecuedAchievement,
  } = useAchievement(loggedUser.id, true);

  const [sortedAchievements, setSortedAchievements] = useState([]);
  const [isSignOutModalVisible, setIsSignOutModalVisible] = useState(false);
  const [isNewAchievementModalVisible, setIsNewAchievementModalVisible] = useState(false);
  const [sorter, setSorter] = useState('Ordem padrão');
  const navigation = useNavigation();

  function handleCloseNewUnlockedAchievementModal() {
    setNewUnlockedAchievements([]);
    setIsNewAchievementModalVisible(false);
  }

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
      console.error(error);
      Toast.error('Falha ao tentar sair da conta');
    }
  }

  useEffect(() => {
    sortAchievements(sorter);
    if (newUnlockedAchievements.length) setIsNewAchievementModalVisible(true);
  }, [achievements, newUnlockedAchievements]);

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
            onPress={() => setIsSignOutModalVisible(true)}
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
            isRescuable,
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
            currentAmount={
              metricsExceptions.includes(metric) ? loggedUser[metric] - 1 : loggedUser[metric]
            }
            isUnlocked={isUnlocked}
            isRescuable={isRescuable}
            hasRescueFeat={true}
            removeRecuedAchievement={removeRecuedAchievement}
          />
        )}
      />

      <Modal
        isVisible={isSignOutModalVisible}
        type={'crying'}
        playSong={false}
        title={`Calma aí! Deseja mesmo 'SAIR DA SUA CONTA 😢?`}
        body={null}
        footer={
          <>
            <Button
              title={'Sair'}
              color={theme.colors.white}
              background={theme.colors.red_700}
              onPress={handleSignOut}
            />
            <Button
              title={'Cancelar'}
              color={theme.colors.black}
              background={theme.colors.green_500}
              onPress={() => setIsSignOutModalVisible(false)}
            />
          </>
        }
      />

      <Modal
        isVisible={isNewAchievementModalVisible}
        type={'earning'}
        title={'Uau! Parece que você ganhou recompensa(s)'}
        body={
          <C.Achievements>
            {newUnlockedAchievements?.map(
              ({ id, name, icon, description, required_amount, metric }) => (
                <C.AchievementContainer key={id}>
                  <Animation
                    source={RewardLight}
                    autoPlay={true}
                    loop={true}
                    size={220}
                    isAbsolute={true}
                    top={-15}
                    left={-10}
                  />
                  <Achievement
                    key={id}
                    name={name}
                    description={description}
                    icon={icon}
                    requiredAmount={required_amount}
                    currentAmount={
                      metricsExceptions.includes(metric)
                        ? loggedUser[metric] - 1
                        : loggedUser[metric]
                    }
                    isUnlocked={true}
                  />
                </C.AchievementContainer>
              )
            )}
          </C.Achievements>
        }
        footer={
          <Button
            title={'Entendido'}
            color={theme.colors.black}
            background={theme.colors.green_500}
            onPress={handleCloseNewUnlockedAchievementModal}
          />
        }
      />
    </C.Container>
  );
}
