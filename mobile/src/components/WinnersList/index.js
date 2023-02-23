import { Button } from '../Button';
import { Winner } from '../Winner';
import * as C from './styles';
import theme from '../../global/styles/theme';
import { Loading } from '../Loading';

export function WinnersList({ winners, isLoading, setIsWinnersListShow }) {
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
        </C.Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
