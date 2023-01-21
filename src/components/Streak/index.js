import React from 'react';
import * as C from './styles';

import SuccessIcon from '../../assets/GlobalAssets/success-icon.svg';
import FailIcon from '../../assets/GlobalAssets/fail-icon.svg';
import PlaceholderIcon from '../../assets/GlobalAssets/fail-icon.svg';

const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

export function Streak() {

  return (
    <C.Container>
      <C.Title>Sequência de dias estudados</C.Title>
      <C.WeekDays>
        {weekDays.map(weekDay => (
          <C.WeekDay key={weekDay}>
            <C.WeekDayName>{weekDay}</C.WeekDayName>
            <SuccessIcon />
          </C.WeekDay>
        ))}
      </C.WeekDays>
    </C.Container>
  );
}
