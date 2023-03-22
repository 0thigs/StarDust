import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';
import Lock from '../../assets/AchievementAssets/lock.svg';
import theme from '../../global/styles/theme';
import * as C from './styles';
import { Modal } from '../Modal';

export function Achievement({
  id,
  name,
  icon: Icon,
  description,
  requiredAmount,
  currentAmount,
  isUnlocked,
  hasRescueFeat,
  reward,
}) {
  const {
    loggedUser: { achievements_ids_to_rescue, coins },
    updateLoggedUser,
  } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rescuedAchievementName, setRescuedAchievementName] = useState('');

  const _currentAmount = Array.isArray(currentAmount) ? currentAmount.length - 1 : currentAmount;
  const percentage = (_currentAmount / requiredAmount) * 100;
  const barWidth = percentage > 100 ? 100 : percentage;
  const isToRescue = achievements_ids_to_rescue.includes(id) && hasRescueFeat;

  function getFormatedCurrentAmount() {
    return _currentAmount >= requiredAmount ? requiredAmount : _currentAmount;
  }

  function handleRescueButtonPress() {
    setRescuedAchievementName(name);
    setIsModalVisible(true);

    updateLoggedUser('achievements_ids_to_rescue', []);
    updateLoggedUser('coins', coins + 20);
  }

  return (
    <C.Container>
      {isUnlocked ? <Icon width={45} height={45} /> : <Lock />}

      <C.Info>
        <C.Name isToRescue={isToRescue}>{name}</C.Name>
        {isToRescue ? (
          <Button
            title={'Resgatar'}
            color={theme.colors.black}
            background={theme.colors.green_500}
            isSmall={true}
            hasAnimation={true}
            onPress={handleRescueButtonPress}
          />
        ) : (
          <>
            <C.Description>{description}</C.Description>
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
          </>
        )}
      </C.Info>

      <Modal
        isVisible={isModalVisible}
        type={'earning'}
        title={'Recompensa resgatada!'}
        body={
          <C.Message>
            <C.Text>Parabéns! Você acabou de ganhar </C.Text>
            <C.Reward>50 </C.Reward>
            <C.Text>de poeira estela pela conquista </C.Text>
            <C.Reward>{rescuedAchievementName}</C.Reward>
          </C.Message>
        }
        footer={
          <Button
            title={'Entendido'}
            color={theme.colors.black}
            background={theme.colors.green_500}
            onPress={() => setIsModalVisible(false)}
          />
        }
      />
    </C.Container>
  );
}
