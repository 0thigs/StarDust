import { useState, useEffect } from 'react';
import * as C from './styles';

import SuccessIcon from '../../assets/GlobalAssets/success-icon.svg';
import FailIcon from '../../assets/GlobalAssets/fail-icon.svg';
import PlaceholderIcon from '../../assets/GlobalAssets/placeholder-icon.svg';
import StreakAnimation from '../../assets/animations/streak-animation.json';
import theme from '../../global/styles/theme';
import dayjs from 'dayjs';
import { useAuth } from '../../hooks/useAuth';

const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

export function Streak({ user: { streak, week_status, created_at }, isToUpdateStreak = false }) {
  const { updateLoggedUser } = useAuth();
  const [weekStatus, setWeekStatus] = useState([]);
  const [streakCount, setStreakCount] = useState(0);
  const todayIndex = dayjs().day();
  const today = week_status[todayIndex];
  const yesterday = week_status[todayIndex - 1];

  function updateWeekStatus(dayIndex, newStatus) {
    console.log(newStatus);
    const updatedWeekStatus = week_status.map((status, index) =>
      index === dayIndex ? newStatus : status
    );
    console.log({ updatedWeekStatus });
    setWeekStatus(updatedWeekStatus);
    updateLoggedUser('week_status', updatedWeekStatus);

  }

  async function updateStreak() {
    if (today !== 'todo') return;

    if (!!yesterday && yesterday === 'done') {
      const updatedStreak = streak + 1;
      setStreakCount(updatedStreak);
      updateLoggedUser('streak', updatedStreak);
    }
    updateWeekStatus(todayIndex, 'done');
  }

  function checkHasUndoneDay() {
    if (today !== 'todo') return;

    const currentDate = new Date();
    const createdAtDate = new Date(created_at);

    if (!!yesterday && yesterday === 'todo' && currentDate !== createdAtDate) {
      setStreakCount(0);
      updateLoggedUser('streak', 0);
      updateWeekStatus(todayIndex);

      const yesterdayIndex = todayIndex - 1;
      updateWeekStatus(yesterdayIndex, 'undone');
    }
  }

  useEffect(() => {
    setWeekStatus(week_status);
    setStreakCount(streak);

    if (isToUpdateStreak) {
      updateStreak();
      return
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
