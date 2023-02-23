import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/core';
import { getRankingImage, getRankingName } from '../../utils/rankings';
import { rockets } from '../../utils/rockets';

import SettingsIcon from '../../assets/GlobalAssets/settings-icon.svg';

import * as C from './styles';
import dayjs from 'dayjs';
import { ArrowLeft } from 'react-native-feather';
import theme from '../../global/styles/theme';

export function ProfileStatus({
  user: { id, ranking_id, selected_rocket_id, avatar, name, level, xp, created_at },
}) {
  const { loggedUser } = useAuth();
  const navigation = useNavigation();
  const RankingImage = getRankingImage(ranking_id);
  const rankingName = getRankingName(ranking_id);
  const rocket = rockets.find(rocket => rocket.id === selected_rocket_id);
  const RocketImage = rocket.image;
  const rocketName = rocket.name;

  const createdAt = dayjs(created_at).format('DD MMMM [de] YYYY');

  function handleSettingsButton() {
    navigation.navigate('Settings');
  }

  function handleBackButton() {
    navigation.navigate('Ranking');
  }

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
      <C.Avatar
        source={{
          uri: `http://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 50)}.jpg`,
        }}
      />
      <C.Name>{name}</C.Name>
      <C.Level>
        Nível {level} - {xp} XP
      </C.Level>
      <C.Created_at>Por aqui desde {createdAt}</C.Created_at>
      <C.StatusContainer>
        <C.Status>
          <C.Title>Ranking atual</C.Title>
          <RankingImage width={50} height={50} />
          <C.StatusName>{rankingName}</C.StatusName>
        </C.Status>
        <C.Status>
          <C.Title>Foguete atual</C.Title>
          <RocketImage
            width={60}
            height={60}
            style={{
              transform: [{ rotate: '90deg' }],
            }}
          />
          <C.StatusName>{rocketName}</C.StatusName>
        </C.Status>
      </C.StatusContainer>
    </C.Container>
  );
}
