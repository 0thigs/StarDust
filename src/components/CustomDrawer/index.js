import React from 'react';
import { Achievement } from '../Achievement';
import * as C from './styles';

export function CustomDrawer() {
  return (
    <C.Container>
      <C.UserAvatar source={{ uri: 'https://github.com/JohnPetros.png' }} />
      <C.UserName>João Pedro Carvalho</C.UserName>
      <C.UserEmail>JohnPetros@gmail.com</C.UserEmail>
      <C.LogOutButton>
        <C.LogOutButtonText>Sair</C.LogOutButtonText>
      </C.LogOutButton>

      <Achievement
        title={'Começando a viagem'}
        description={'Termine a primeira fase do StarDust'}
        goal={1}
        id={1}
        isGotten={true}
      />
      <Achievement
        title={'Início da exploração'}
        description={'Completo o primeiro planeta do StarDust'}
        goal={1}
        id={2}
        isGotten={true}
      />
      <Achievement
        title={'100 XP'}
        description={'Ganhe 100 XP'}
        goal={100}
        id={3}
        isGotten={true}
      />
      <Achievement
        title={'Coletor de estrelas'}
        description={'Complete 5 fases'}
        goal={5}
        id={4}
        isGotten={true}
      />
      <Achievement
        title={'Colecionador de estrelas'}
        description={'Complete 10 fases'}
        goal={10}
        id={4}
        isGotten={false}
      />
       <Achievement
        title={'Caçador de estrelas'}
        description={'Complete 20 fases'}
        goal={20}
        id={4}
        isGotten={false}
      />
    </C.Container>
  );
}
