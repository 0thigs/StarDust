import * as C from './styles';
import Lock from '../../assets/AchievementAssets/lock.svg'

export function Achievement({
  title,
  icon: Icon,
  description,
  requiredCount,
  currentCount,
  isUnlocked,
}) {
  const currentCount_ = Array.isArray(currentCount) ? currentCount.length - 1 : currentCount;
  const percentage = (currentCount_ / requiredCount) * 100;
  const barWidth = percentage > 100 ? 100 : percentage;

  function getFormatedCurrentCount() {
    return currentCount_ >= requiredCount ? requiredCount : currentCount_;
  }

  return (
    <C.Container>
      {isUnlocked ? <Icon width={45} height={45} /> : <Lock />}

      <C.AchievementsInfo>
        <C.AchievementsTitle>{title}</C.AchievementsTitle>
        <C.AchievementsDescription>{description}</C.AchievementsDescription>
        {!isUnlocked && (
          <C.ProgressBarInfo>
            <C.ProgressBar>
              <C.Bar barWidth={barWidth + '%'} />
            </C.ProgressBar>
            <C.ProgressBarrequiredCount>
              {getFormatedCurrentCount()}/{requiredCount}
            </C.ProgressBarrequiredCount>
          </C.ProgressBarInfo>
        )}
      </C.AchievementsInfo>
    </C.Container>
  );
}
