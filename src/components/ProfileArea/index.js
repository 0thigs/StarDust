import React from 'react';
import { getRankingImage, getRankingName } from '../../utils/rankings';
import SettingsIcon from '../../assets/GlobalAssets/settings-icon.svg';

import * as C from './styles';
import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-br';
import { rockets } from '../../utils/rockets';

export function ProfileArea({
  user: { ranking_id, selected_rocket_id, avatar, name, level, xp, created_at },
}) {
  const RankingImage = getRankingImage(ranking_id);
  const rankingName = getRankingName(ranking_id);
  const RocketImage = rockets.find(rocket => rocket.id === selected_rocket_id).image

  const createdAt = dayjs(created_at).locale(ptBR).format('DD MMMM [de] YYYY');

  function handleSettingsButton() {}

  return (
    <C.Container>
      <C.SettingsButton activeOpacity={0.7} onPress={handleSettingsButton}>
        <SettingsIcon width={40} height={40} />
      </C.SettingsButton>
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
            style={{
              transform: [{ rotate: '90deg' }],
            }}
          />
          <C.StatusName>Nova Explorer</C.StatusName>
        </C.Status>
      </C.StatusContainer>
    </C.Container>
  );
}
