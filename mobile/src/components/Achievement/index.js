import * as C from './styles';
import Lock from '../../assets/AchievementAssets/lock.svg';

export function Achievement({
  title,
  icon: Icon,
  description,
  requiredAmount,
  currentAmount,
  isUnlocked,
}) {

  const currentAmount_ = Array.isArray(currentAmount) ? currentAmount.length - 1 : currentAmount;
  const percentage = (currentAmount_ / requiredAmount) * 100;
  const barWidth = percentage > 100 ? 100 : percentage;

  function getFormatedCurrentAmount() {
    return currentAmount_ >= requiredAmount ? requiredAmount : currentAmount_;
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
            <C.ProgressBarrequiredAmount>
              {getFormatedCurrentAmount()}/{requiredAmount}
            </C.ProgressBarrequiredAmount>
          </C.ProgressBarInfo>
        )}
      </C.AchievementsInfo>
    </C.Container>
  );
}
