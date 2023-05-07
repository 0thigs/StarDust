import { useEffect, useState, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { Button } from '../Button';
import { Winner } from '../Winner';
import { Sound } from '../Sound';
import { User } from '../User';

import EarningSound from '../../assets/sounds/earning-sound.wav';
import * as C from './styles';
import theme from '../../global/styles/theme';
import { Modal } from '../Modal';

export function WinnersList({ winners, setWinners, isLoggedUserWinner, reward }) {
  const {
    loggedUser: { last_position, name, avatar_id, coins },
    updateLoggedUser,
  } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const soundRef = useRef(null);
  const rewardByLastPosition =
    reward + 5 * (last_position === 1 ? 3 : last_position === 3 ? 1 : last_position);

  function handleModalButtonPress() {
    setIsModalVisible(false);
    setWinners([]);
  }

  function handleWinnerListButtonPress() {
    if (isLoggedUserWinner) {
      setIsModalVisible(true);
      updateLoggedUser({ coins: coins + rewardByLastPosition });
      return;
    }
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
            reward={reward}
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
        isVisible={isModalVisible}
        type={'earning'}
        title={'Recompensa resgatada!'}
        body={
          <C.RewardMessage>
            <C.Text>Parabéns! Você acabou de ganhar </C.Text>
            <C.Reward>{rewardByLastPosition}</C.Reward>
            <C.Text>de poeira estela </C.Text>
          </C.RewardMessage>
        }
        footer={
          <Button
            title={'Entendido'}
            color={theme.colors.black}
            background={theme.colors.green_500}
            onPress={handleModalButtonPress}
          />
        }
        playSong={false}
      />
    </C.Container>
  );
}
