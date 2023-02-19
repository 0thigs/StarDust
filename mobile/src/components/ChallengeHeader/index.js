import React from 'react';
import * as C from './styles';
import * as Icon from 'react-native-feather';
import theme from '../../global/styles/theme';
const iconSize = 25;

export function ChallengeHeader() {
  return (
    <C.Container>
      <C.Top>
        <C.HeaderButton>
          <Icon.ArrowLeft width={iconSize} height={iconSize} color={theme.colors.green_500} />
        </C.HeaderButton>
        <C.Title>Desafio</C.Title>
        <C.HeaderButton>
          <Icon.MoreVertical width={iconSize} height={iconSize} color={theme.colors.green_500} />
        </C.HeaderButton>
      </C.Top>
      <C.Navigation>
        <C.NavigationButton isActive={true}>
          <C.Title isActive={true}>Problema</C.Title>
        </C.NavigationButton>
        <C.NavigationButton>
          <C.Title>Código</C.Title>
        </C.NavigationButton>
        <C.NavigationButton>
          <C.Title>Resultado</C.Title>
        </C.NavigationButton>
      </C.Navigation>
    </C.Container>
  );
}
