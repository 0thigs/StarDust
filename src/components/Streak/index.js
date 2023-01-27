import { useState, useEffect } from 'react';
import * as C from './styles';

import SuccessIcon from '../../assets/GlobalAssets/success-icon.svg';
import FailIcon from '../../assets/GlobalAssets/fail-icon.svg';
import PlaceholderIcon from '../../assets/GlobalAssets/placeholder-icon.svg';
import StreakAnimation from '../../assets/GlobalAssets/streak-animation.json';
import theme from '../../global/styles/theme';

const weekDays = [
  { name: 'DOM', status: 'toDo' },
  { name: 'SEG', status: 'toDo' },
  { name: 'TER', status: 'toDo' },
  { name: 'QUA', status: 'toDo' },
  { name: 'QUI', status: 'toDo' },
  { name: 'SEX', status: 'toDo' },
  { name: 'SÁB', status: 'toDo' },
];

export function Streak({ user: { streak, week_status } }) {
  const [weekStatus, setWeekStatus] = useState([]);
  const [streakCount, setStreakCount] = useState(0);

  useEffect(() => {
    const updatedWeekStatus = weekDays.map((weekDay, index) => ({
      ...weekDay,
      status: week_status[index],
    }));
    setWeekStatus(updatedWeekStatus);
    setStreakCount(streak);
  }, []);

  return (
    <C.Container>
      <C.Title>Sequência de dias estudados</C.Title>
      <C.WeekStatus>
        {weekStatus.map(weekDay => (
          <C.WeekDay key={weekDay.name}>
            <C.WeekDayName>{weekDay.name}</C.WeekDayName>
            {weekDay.status === 'done' && <SuccessIcon />}
            {weekDay.status === 'undone' && <FailIcon />}
            {weekDay.status === 'toDo' && <PlaceholderIcon />}
          </C.WeekDay>
        ))}
      </C.WeekStatus>
      <C.StreakStatus>
        <C.StreakAnimation
          source={StreakAnimation}
          autoPlay={true}
          loop={false}
          colorFilters={[
            { keypath: '모양 레이어 1', color: theme.colors.green_500 },
          ]}
        />
        <C.StreakCount>{streakCount} dias estudados seguidos</C.StreakCount>
      </C.StreakStatus>
    </C.Container>
  );
}
