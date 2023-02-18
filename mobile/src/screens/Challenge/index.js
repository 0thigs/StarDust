import React from 'react';
import { Problem } from '../../components/Problem';
import { challenges } from '../../utils/challenges';
import * as C from './styles';
import * as Icon from 'react-native-feather';

export function Challenge({ id = 1 }) {
  const { title, texts } = challenges.find(challenge => challenge.id === id);

  return (
    <C.Container>
      {/* <C.Header>
        <C.Top>
          <C.BackButton>
            <Icon.ArrowLeft />
          </C.BackButton>
          <C.Title>Desafio</C.Title>
          <C.Settings>
            <Icon.Settings />
          </C.Settings>
        </C.Top>
        <C.Navigation></C.Navigation>
      </C.Header> */}

      <Problem title={title} texts={texts} />
    </C.Container>
  );
}
