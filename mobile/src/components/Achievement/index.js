import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { Animation } from '../Animation';

import { SvgUri } from 'react-native-svg';
import { getImage } from '../../utils/getImage';
import { Toast } from 'toastify-react-native';
import Lock from '../../assets/AchievementAssets/lock.svg';
import Lazy from '../../assets/animations/lazy-animation.json';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function Achievement({
  id,
  name,
  icon,
  description,
  requiredAmount,
  currentAmount,
  isUnlocked,
  hasRescueFeat,
  isRescuable,
  reward,
  removeRecuedAchievement,
}) {
  const {
    loggedUser: { coins },
    updateLoggedUser,
  } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rescuedAchievementName, setRescuedAchievementName] = useState('');
  const [isIconLoadEnd, setIsIconLoadEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const percentage = (currentAmount / requiredAmount) * 100;
  const barWidth = percentage > 100 ? 100 : percentage;
  const canRescue = isRescuable && hasRescueFeat;

  function getFormatedCurrentAmount() {
    return currentAmount >= requiredAmount ? requiredAmount : currentAmount;
  }

  async function handleRescueButtonPress() {
    setIsLoading(true);

    try {
      setRescuedAchievementName(name);
      setIsModalVisible(true);
      await Promise.all([removeRecuedAchievement(id), updateLoggedUser('coins', coins + reward)]);
    } catch (error) {
      console.error(error);
      Toast.error('Erro ao resgatar a conquista');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <C.Container>
      {isUnlocked ? (
        <>
          <SvgUri
            uri={getImage('achievements', icon)}
            width={isIconLoadEnd ? 45 : 0}
            onLoad={() => setIsIconLoadEnd(true)}
          />
          {!isIconLoadEnd && <Animation source={Lazy} autoPlay={true} loop={true} size={90} />}
        </>
      ) : (
        <Lock />
      )}

      <C.Info>
        <C.Name canRescue={canRescue}>{name}</C.Name>
        {canRescue ? (
          <Button
            title={'Resgatar'}
            color={theme.colors.black}
            background={theme.colors.green_500}
            isSmall={true}
            hasAnimation={true}
            onPress={handleRescueButtonPress}
            isLoading={isLoading}
            isDisabled={isLoading}
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
            <C.Reward isCoins={true}>{reward} </C.Reward>
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
            isLoading={isLoading}
            isDisabled={isLoading}
          />
        }
      />
    </C.Container>
  );
}
