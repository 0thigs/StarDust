import { useState, useEffect } from 'react';
import * as C from './styles';

import SuccessIcon from '../../assets/GlobalAssets/success-icon.svg';
import FailIcon from '../../assets/GlobalAssets/fail-icon.svg';
import PlaceholderIcon from '../../assets/GlobalAssets/placeholder-icon.svg';

import dayjs from 'dayjs';

const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

export function Streak({ user: { streak, completed_days } }) {
  const [completedDays, setCompletedDays] = useState();
  const [streakCount, setStreakCount] = useState(0);
  const today = dayjs().day();

  useEffect(() => {
    setStreakCount(completed_days.length + 1);
  });

  return (
    <C.Container>
      <C.Title>Sequência de dias estudados</C.Title>
      <C.WeekDays>
        {weekDays.map(weekDay => (
          <C.WeekDay key={weekDay}>
            <C.WeekDayName>{weekDay}</C.WeekDayName>
            <PlaceholderIcon />
          </C.WeekDay>
        ))}
      </C.WeekDays>
      <C.StreakCount>{streakCount} dias estudados seguidos</C.StreakCount>
    </C.Container>
  );
}