import { useEffect, useRef } from 'react';
import { Button } from '../Button';
import { Winner } from '../Winner';
import { Loading } from '../Loading';
import { Sound } from '../Sound';
import EarningSound from '../../assets/sounds/earning-sound.wav';
import * as C from './styles';
import theme from '../../global/styles/theme';

export function WinnersList({ winners, isLoading, setIsWinnersListShow }) {
  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current.playSound();
  }, []);

  return (
    <>
      {!isLoading ? (
        <C.Container>
          <C.Title>Resultado da semana</C.Title>
          <C.Winners>
            {winners.map(({ name, avatar, position, xp }) => (
              <Winner key={position} name={name} avatar={avatar} position={position} xp={xp} />
            ))}
          </C.Winners>

          <Button
            title={'Continuar'}
            onPress={() => setIsWinnersListShow(false)}
            color={theme.colors.black}
            background={theme.colors.green_500}
          />

          <Sound ref={soundRef} soundFile={EarningSound} />
        </C.Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
