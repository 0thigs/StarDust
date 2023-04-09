import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';
import Lock from '../../assets/AchievementAssets/lock.svg';
import theme from '../../global/styles/theme';
import * as C from './styles';
import { Modal } from '../Modal';
import { SvgUri } from 'react-native-svg';
import { getImage } from '../../utils/getImage';

export function Achievement({
  id,
  name,
  icon,
  description,
  requiredAmount,
  currentAmount,
  isUnlocked,
  hasRescueFeat,
  reward,
}) {
  const {
    loggedUser: { achievements_to_rescue, coins },
    updateLoggedUser,
  } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rescuedAchievementName, setRescuedAchievementName] = useState('');

  const currentUserAmount = currentAmount - 1;
  const percentage = (currentUserAmount / requiredAmount) * 100;
  const barWidth = percentage > 100 ? 100 : percentage;
  const isToRescue = achievements_to_rescue.includes(id) && hasRescueFeat;

  function getFormatedCurrentAmount() {
    return currentUserAmount >= requiredAmount ? requiredAmount : currentUserAmount;
  }

  function handleRescueButtonPress() {
    setRescuedAchievementName(name);
    setIsModalVisible(true);

    updateLoggedUser(
      'achievements_to_rescue',
      achievements_to_rescue.filter(achievementId => achievementId !== id)
    );
    updateLoggedUser('coins', coins + reward);
  }

  return (
    <C.Container>
      {isUnlocked ? <SvgUri uri={getImage('achievements', icon)} width={45} /> : <Lock />}

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
            <C.Reward>{reward} </C.Reward>
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
