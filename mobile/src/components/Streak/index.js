import { useState, useEffect } from 'react';
import * as C from './styles';

import SuccessIcon from '../../assets/GlobalAssets/success-icon.svg';
import FailIcon from '../../assets/GlobalAssets/fail-icon.svg';
import PlaceholderIcon from '../../assets/GlobalAssets/placeholder-icon.svg';
import StreakAnimation from '../../assets/GlobalAssets/streak-animation.json';
import theme from '../../global/styles/theme';
import dayjs from 'dayjs';

const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

export function Streak({
  user: { streak, week_status },
  updateLoggedUser = null,
  IsToUpdateStreak = false,
}) {
  const [weekStatus, setWeekStatus] = useState([]);
  const [streakCount, setStreakCount] = useState(0);
  console.log(week_status);

  async function updateWeekStatus(todayIndex) {
    const updatedWeekStatus = week_status.map((status, index) =>
      index === todayIndex ? 'done' : status
    );
    setWeekStatus(updatedWeekStatus);
    updateLoggedUser('week_status', updatedWeekStatus);
  }

  async function updateStreak() {
    const todayIndex = dayjs().day();
    let today = week_status[todayIndex];

    if (today !== 'todo') {
      return;
    }

    const yesterday = week_status[todayIndex - 1];
    if (yesterday === 'done') {
      const updatedStreak = streak + 1;
      setStreakCount(updatedStreak);
      updateLoggedUser('streak', updatedStreak);
    }

    updateWeekStatus(todayIndex);
  }

  useEffect(() => {
    setWeekStatus(week_status);
    setStreakCount(streak);

    if (IsToUpdateStreak) {
      updateStreak();
    }
  }, []);

  return (
    <C.Container>
      <C.Title>Sequência de dias estudados</C.Title>
      <C.WeekStatus>
        {weekDays.map((weekDay, index) => (
          <C.WeekDay key={weekDay}>
            <C.WeekDayName>{weekDay}</C.WeekDayName>
            {weekStatus[index] === 'done' && <SuccessIcon />}
            {weekStatus[index] === 'undone' && <FailIcon />}
            {weekStatus[index] === 'todo' && <PlaceholderIcon />}
          </C.WeekDay>
        ))}
      </C.WeekStatus>
      <C.StreakStatus>
        <C.StreakAnimation
          source={StreakAnimation}
          autoPlay={true}
          loop={false}
          colorFilters={[{ keypath: '모양 레이어 1', color: theme.colors.green_500 }]}
        />
        <C.StreakCount>{streakCount} dias estudados seguidos</C.StreakCount>
      </C.StreakStatus>
    </C.Container>
  );
}
