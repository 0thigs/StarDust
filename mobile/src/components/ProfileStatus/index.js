import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/core';
import { getRankingImage, getRankingName } from '../../utils/rankings';
import { rockets } from '../../utils/rockets';

import SettingsIcon from '../../assets/GlobalAssets/settings-icon.svg';

import * as C from './styles';
import dayjs from 'dayjs';

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

  return (
    <C.Container>
      {id === loggedUser.id && (
        <C.SettingsButton activeOpacity={0.7} onPress={handleSettingsButton}>
          <SettingsIcon width={35} height={35} />
        </C.SettingsButton>
      )}
      <C.Avatar source={{ uri: avatar }} />
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
