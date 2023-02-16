import React from 'react';
import { getRankingImage, getRankingName } from '../../utils/rankings';
import { rocketImages } from '../../utils/rocketImages';
import SettingsIcon from '../../assets/GlobalAssets/settings-icon.svg';

import * as C from './styles';

export function ProfileArea({ user: { ranking_id, selected_rocket_id, avatar, name, level, xp } }) {
  const RankingImage = getRankingImage(ranking_id);
  const rankingName = getRankingName(ranking_id);
  const RocketImage = rocketImages['rocket' + selected_rocket_id];

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
      <C.Created_at>Por aqui desde 20 de janeiro de 2023</C.Created_at>
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