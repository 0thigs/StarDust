import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/core';
import { ArrowLeft } from 'react-native-feather';
import { SvgUri } from 'react-native-svg';
import { getImage } from '../../utils/getImage';

import SettingsIcon from '../../assets/GlobalAssets/settings-icon.svg';
import dayjs from 'dayjs';
import theme from '../../global/styles/theme';
import api from '../../services/api';
import * as C from './styles';

export function ProfileStatus({
  user: { id, ranking_id, selected_rocket_id, avatar_id, name, level, xp, created_at },
}) {
  const { loggedUser } = useAuth();
  const [avatar, setAvatar] = useState('');
  const [ranking, setRanking] = useState(null);
  const [rocket, setRocket] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const createdAt = dayjs(created_at).format('DD MMMM [de] YYYY');

  async function getRanking() {
    const ranking = await api.getRanking(ranking_id);
    setRanking(ranking);
  }

  async function getRocket() {
    const rocket = await api.getRocket(selected_rocket_id);
    setRocket(rocket);
  }

  async function getAvatar() {
    const avatar = await api.getAvatar(avatar_id);
    setAvatar(avatar);
  }

  function handleSettingsButton() {
    navigation.navigate('Settings');
  }

  function handleBackButton() {
    navigation.navigate('Ranking');
  }

  useEffect(() => {
    try {
      getRocket();
      getAvatar();
      getRanking();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <C.Container>
      {id === loggedUser.id ? (
        <C.ProfileButton activeOpacity={0.7} onPress={handleSettingsButton}>
          <SettingsIcon width={35} height={35} />
        </C.ProfileButton>
      ) : (
        <C.ProfileButton onPress={handleBackButton}>
          <ArrowLeft color={theme.colors.green_300} width={35} height={35}></ArrowLeft>
        </C.ProfileButton>
      )}
      <C.Avatar source={{ uri: getImage('avatars', avatar) }} />
      <C.Name>{name}</C.Name>
      <C.Level>
        Nível {level} - {xp} XP
      </C.Level>
      <C.Created_at>Por aqui desde {createdAt}</C.Created_at>
      {ranking && rocket && (
        <C.StatusContainer>
          <C.Status>
            <C.Title>Ranking atual</C.Title>
            <SvgUri uri={getImage('rankings', ranking.image)} width={60} height={60} />
            <C.StatusName>{ranking.name}</C.StatusName>
          </C.Status>
          <C.Status>
            <C.Title>Foguete atual</C.Title>
            <SvgUri
              uri={getImage('rockets', rocket.image)}
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
