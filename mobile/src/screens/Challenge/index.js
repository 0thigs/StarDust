import React from 'react';
import { Problem } from '../../components/Problem';
import { challenges } from '../../utils/challenges';
import * as C from './styles';
import * as Icon from 'react-native-feather';
import theme from '../../global/styles/theme';
import { Code } from '../../components/Code';
const iconSize = 25;

export function Challenge({ id = 1 }) {
  const { title, texts, code } = challenges.find(challenge => challenge.id === id);

  return (
    <C.Container>
      <C.Header>
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
      </C.Header>

      {/* <Problem title={title} texts={texts} /> */}
      <Code code={code} />
    </C.Container>
  );
}
