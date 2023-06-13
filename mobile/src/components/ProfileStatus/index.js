import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useRocket } from '../../hooks/useRocket';
import { useRanking } from '../../hooks/useRanking';
import { useNavigation } from '@react-navigation/core';
import { useImageUri } from '../../hooks/useImageUri';

import { ArrowLeft, Edit } from 'react-native-feather';
import { SvgUri } from 'react-native-svg';
import { UserAvatar } from '../UserAvatar';
import { SelectAvatar } from '../SelectAvatar';

import SettingsIcon from '../../assets/GlobalAssets/settings-icon.svg';
import dayjs from 'dayjs';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function ProfileStatus({
  user: { ranking_id, rocket_id, avatar_id, name, level, xp, created_at },
  isFromLoggedUser,
}) {
  const { loggedUser } = useAuth();
  const { rocket } = useRocket(rocket_id);
  const { ranking } = useRanking(ranking_id);
  const { imageUri: rankingImageUri } = useImageUri('rankings', ranking?.image);
  const { imageUri: rocketImageUri } = useImageUri('rockets', rocket?.image);
  const [isSelectAvatarVisible, setIsSelectAvatarVisible] = useState(false);
  const navigation = useNavigation();
  const createdAt = dayjs(created_at).format('DD MMMM [de] YYYY');

  function handleSettingsButton() {
    navigation.navigate('Settings');
  }

  function handleBackButton() {
    navigation.navigate('Ranking');
  }

  function handleAvatarButton() {
    if (!isFromLoggedUser) return;

    setIsSelectAvatarVisible(true);
  }

  return (
    <C.Container>
      {isFromLoggedUser ? (
        <C.ProfileButton onPress={handleSettingsButton} activeOpacity={0.7}>
          <SettingsIcon width={35} height={35} />
        </C.ProfileButton>
      ) : (
        <C.ProfileButton onPress={handleBackButton} activeOpacity={0.7}>
          <ArrowLeft color={theme.colors.green_300} width={32} height={32}></ArrowLeft>
        </C.ProfileButton>
      )}
      <C.AvatarButton onPress={handleAvatarButton}>
        <UserAvatar avatarId={isFromLoggedUser ? loggedUser.avatar_id : avatar_id} size={150} />
        {isFromLoggedUser && (
          <C.Icon>
            <Edit color={theme.colors.green_300} />
          </C.Icon>
        )}
      </C.AvatarButton>

      {isFromLoggedUser && (
        <SelectAvatar isVisible={isSelectAvatarVisible} setIsVisible={setIsSelectAvatarVisible} />
      )}

      <C.Name>{name}</C.Name>
      <C.Level>
        Nível {level} - {xp} XP
      </C.Level>
      <C.Created_at>Por aqui desde {createdAt}</C.Created_at>
      {ranking && rocket && (
        <C.StatusContainer>
          <C.Status>
            <C.Title>Ranking atual</C.Title>
            <SvgUri uri={rankingImageUri} width={60} height={60} />
            <C.StatusName>{ranking.name}</C.StatusName>
          </C.Status>
          <C.Status>
            <C.Title>Foguete atual</C.Title>
            <SvgUri
              uri={rocketImageUri}
              width={60}
              height={60}
              style={{
                transform: [{ rotate: '90deg' }],
              }}
            />
            <C.StatusName>{rocket.name}</C.StatusName>
          </C.Status>
        </C.StatusContainer>
      )}
    </C.Container>
  );
}
