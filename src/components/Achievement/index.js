import React from 'react';
import * as C from './styles';
import { achievementIcons } from '../../utils/AchievementIcons';

import Lock from '../../assets/AchievementAssets/lock.svg';

export function Achievement({ title, description, goal, id, isGotten }) {
  const AchievementIcon = achievementIcons['achievement' + id];

  return (
    <C.Container>
      {isGotten ? <AchievementIcon /> : <Lock />}
      <C.AchievementsInfo>
        <C.AchievementsTitle>{title}</C.AchievementsTitle>
        <C.AchievementsDescription>{description}</C.AchievementsDescription>
        <C.ProgressBarInfo>
          <C.ProgressBar>
            <C.Bar />
          </C.ProgressBar>
          <C.ProgressBarGoal>1/{goal}</C.ProgressBarGoal>
        </C.ProgressBarInfo>
      </C.AchievementsInfo>
    </C.Container>
  );
}
