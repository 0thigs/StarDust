import { useEffect, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { Button } from '../Button';
import { Winner } from '../Winner';
import { Sound } from '../Sound';
import { User } from '../User';

import EarningSound from '../../assets/sounds/earning-sound.wav';
import * as C from './styles';
import theme from '../../global/styles/theme';

export function WinnersList({ winners, isLoading, setWinners, isLoggedUserWinner }) {
  const {
    loggedUser: { last_position, name, avatar_id },
  } = useAuth();
  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current.play();
  }, []);

  return (
    <>
      <C.Container>
        <C.Title>Resultado da semana</C.Title>
        <C.Winners>
          {winners.map(({ name, avatar_id, position, xp }) => (
            <Winner key={position} name={name} avatar_id={avatar_id} position={position} xp={xp} />
          ))}
        </C.Winners>

        <Button
          title={'Continuar'}
          onPress={() => setWinners([])}
          color={theme.colors.black}
          background={theme.colors.green_500}
        />

        {last_position && !isLoggedUserWinner && (
          <>
            <C.Message>
              Que pena! Você ficou na {last_position}º no ranking da última semana
            </C.Message>
            <User position={last_position} name={name} avatar_id={avatar_id} />
          </>
        )}

        <Sound ref={soundRef} soundFile={EarningSound} />
      </C.Container>
    </>
  );
}
