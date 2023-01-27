import { useState, useEffect } from 'react';
import * as C from './styles';

import SuccessIcon from '../../assets/GlobalAssets/success-icon.svg';
import FailIcon from '../../assets/GlobalAssets/fail-icon.svg';
import PlaceholderIcon from '../../assets/GlobalAssets/placeholder-icon.svg';

import dayjs from 'dayjs';

const weekDays = [
  { name: 'DOM', isCompleted: false },
  { mame: 'SEG', isCompleted: false },
  { mame: 'TER', isCompleted: false },
  { mame: 'QUA', isCompleted: false },
  { mame: 'QUI', isCompleted: false },
  { mame: 'SEX', isCompleted: false },
  { mame: 'SÁB', isCompleted: false },
];

export function Streak({ user: { streak, completed_days } }) {
  const [completedDays, setCompletedDays] = useState([]);
  console.log(completedDays);
  const [streakCount, setStreakCount] = useState(0);
  const today = dayjs().day();

  function getCompletedDays() {
    const verifiedCompletedDays = weekDays.map((weekDay, index) => {
      weekDay.isCompleted = completed_days[index];
    });
    setCompletedDays(verifiedCompletedDays);
  }

  useEffect(() => {
    getCompletedDays();
    setStreakCount(completed_days.length + 1);
  });

  return (
    <C.Container>
      <C.Title>Sequência de dias estudados</C.Title>
      <C.WeekDays>
        {weekDays.map(({ name }) => (
          <C.WeekDay key={name}>
            <C.WeekDayName>{name}</C.WeekDayName>
            <PlaceholderIcon />
          </C.WeekDay>
        ))}
      </C.WeekDays>
      <C.StreakCount>{streakCount} dias estudados seguidos</C.StreakCount>
    </C.Container>
  );
}
