import { useEffect, useState, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { SvgUri } from 'react-native-svg';
import { Animation } from '../Animation';
import { Button } from '../Button';
import { Winner } from '../Winner';
import { Sound } from '../Sound';
import { Modal } from '../Modal';
import { User } from '../User';

import RewardLight from '../../assets/animations/reward-light-animation.json';
import EarningSound from '../../assets/sounds/earning-sound.wav';
import * as C from './styles';
import theme from '../../global/styles/theme';
import { getImage } from '../../utils/getImage';

export function WinnersList({ winners, setWinners, isLoggedUserWinner, currentRanking }) {
  const {
    loggedUser: { last_position, name, avatar_id, coins },
    updateLoggedUser,
  } = useAuth();
  const [isRewardModalVisible, setIsRewardModalVisible] = useState(false);
  const [isRankingModalVisible, setIsRankingModalVisible] = useState(false);
  const soundRef = useRef(null);
  const rewardByLastPosition =
    currentRanking.reward + 5 * (last_position === 1 ? 3 : last_position === 3 ? 1 : last_position);

  function handleModalButtonPress(type) {
    if (type === 'reward') {
      setIsRewardModalVisible(false);
      setIsRankingModalVisible(true);
      return;
    }

    setIsRankingModalVisible(false);
    setWinners([]);
  }

  function handleWinnerListButtonPress() {
    if (isLoggedUserWinner) {
      setIsRewardModalVisible(true);
      updateLoggedUser({ coins: coins + rewardByLastPosition });
      return;
    }
    setIsRankingModalVisible(true);
    setWinners([]);
  }

  useEffect(() => {
    soundRef.current.play();
  }, []);

  return (
    <C.Container>
      <C.Title>Resultado da semana</C.Title>
      <C.Winners>
        {winners.map(({ name, avatar_id, position, xp }) => (
          <Winner
            key={position}
            name={name}
            avatarId={avatar_id}
            position={position}
            xp={xp}
            reward={currentRanking.reward}
          />
        ))}
      </C.Winners>

      <Button
        title={'Continuar'}
        onPress={handleWinnerListButtonPress}
        color={theme.colors.black}
        background={theme.colors.green_500}
      />

      {last_position && !isLoggedUserWinner ? (
        <>
          <C.Message>
            Que pena! Você ficou na {last_position}º no ranking da última semana
          </C.Message>
          <User position={last_position} name={name} avatar_id={avatar_id} />
        </>
      ) : (
        <C.Message>Parabéns! Você ficou na {last_position}º no ranking da última semana</C.Message>
      )}

      <Sound ref={soundRef} soundFile={EarningSound} />

      <Modal
        isVisible={isRewardModalVisible}
        type={'earning'}
        title={'Recompensa resgatada!'}
        body={
          <C.RewardMessage>
            <C.Text>Parabéns! Você acabou de ganhar </C.Text>
            <C.Reward>{rewardByLastPosition}</C.Reward>
            <C.Text>de poeira estela por ter ficado em os três primeiros</C.Text>
          </C.RewardMessage>
        }
        footer={
          <Button
            title={'Entendido'}
            color={theme.colors.black}
            background={theme.colors.green_500}
            onPress={() => handleModalButtonPress('reward')}
          />
        }
        playSong={false}
      />

      <Modal
        isVisible={isRankingModalVisible}
        type={'earning'}
        title={'Recompensa resgatada!'}
        body={
          <>
            <Animation
              source={RewardLight}
              autoPlay={true}
              loop={true}
              size={220}
              isAbsolute={true}
              top={-15}
              left={13}
            />
            <SvgUri uri={getImage('rankings', currentRanking.image)} width={100} height={100} />
            <C.RewardMessage>
              <C.Text>Parabéns! Você acaba de chegar no ranking: </C.Text>
              <C.Reward>{currentRanking.name}</C.Reward>
            </C.RewardMessage>
          </>
        }
        footer={
          <Button
            title={'Entendido'}
            color={theme.colors.black}
            background={theme.colors.green_500}
            onPress={() => handleModalButtonPress('ranking')}
          />
        }
        playSong={false}
      />
    </C.Container>
  );
}
