import React from 'react';
import * as C from './styles';
 
import Lock from '../../assets/AchievementAssets/lock.svg';

export function Achievement({ title, icon: Icon, description, goal, metric, isUnlocked }) {
  const barWidth = metric / goal + '%';
  return (
    <C.Container>
      {/* {isGotten ? <AchievementIcon /> : <Lock />} */}
      <Icon width={45} height={45} />
      <C.AchievementsInfo>
        <C.AchievementsTitle>{title}</C.AchievementsTitle>
        <C.AchievementsDescription>{description}</C.AchievementsDescription>
        {!isUnlocked && (
          <C.ProgressBarInfo>
            <C.ProgressBar>
              <C.Bar barWidth={barWidth} />
            </C.ProgressBar>
            <C.ProgressBarGoal>
              {Array.isArray(metric) ? metric.length - 1 : metric}/{goal}
            </C.ProgressBarGoal>
          </C.ProgressBarInfo>
        )}
      </C.AchievementsInfo>
    </C.Container>
  );
}
