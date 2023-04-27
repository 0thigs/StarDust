import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useRoute } from '@react-navigation/native';
import * as C from './styles';

import SuccessIcon from '../../assets/GlobalAssets/success-icon.svg';
import FailIcon from '../../assets/GlobalAssets/fail-icon.svg';
import PlaceholderIcon from '../../assets/GlobalAssets/placeholder-icon.svg';
import StreakAnimation from '../../assets/animations/streak-animation.json';
import theme from '../../global/styles/theme';
import dayjs from 'dayjs';

const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

export function Streak({ user: { streak, week_status, did_complete_saturday, created_at } }) {
  const { updateLoggedUser } = useAuth();
  const route = useRoute();
  const [weekStatus, setWeekStatus] = useState([]);
  const [streakCount, setStreakCount] = useState(0);
  const todayIndex = dayjs().day();
  const today = week_status[todayIndex];
  const yesterday = week_status[todayIndex - 1];

  function updateWeekStatus(dayIndex, newStatus, currentWeekStatus) {
    const updatedWeekStatus = currentWeekStatus.map((status, index) =>
      index === dayIndex ? newStatus : status
    );
    setWeekStatus(updatedWeekStatus);
    updateLoggedUser('week_status', updatedWeekStatus);
    return updatedWeekStatus;
  }

  async function updateStreak(currentWeekStatus) {
    if (today !== 'todo') return;
    console.log(week_status, 'update');

    if ((!!yesterday && yesterday === 'done') || (todayIndex === 0 && did_complete_saturday)) {
      const updatedStreak = streak + 1;
      setStreakCount(updatedStreak);
      updateLoggedUser('streak', updatedStreak);
      if (todayIndex === 6) {
        updateLoggedUser('did_complete_saturday', true);
      }
    }
    updateWeekStatus(todayIndex, 'done', currentWeekStatus);

    if (todayIndex !== 6 && did_complete_saturday) updateLoggedUser('did_complete_saturday', false);
  }

  function checkHasUndoneDay() {
    console.log(week_status, 'undone');
    if (today !== 'todo') return;

    const currentDate = new Date();
    const createdAtDate = new Date(created_at);
    let currentWeekStatus = week_status;

    if (yesterday && yesterday === 'todo' && currentDate !== createdAtDate) {
      setStreakCount(0);
      updateLoggedUser('streak', 0);

      const yesterdayIndex = todayIndex - 1;
      currentWeekStatus = updateWeekStatus(yesterdayIndex, 'undone', currentWeekStatus);
    }

    if (route.name !== 'Profile') {
      updateStreak(currentWeekStatus);
      return;
    }
  }

  useEffect(() => {
    setWeekStatus(week_status);
    setStreakCount(streak);
    // checkHasUndoneDay();
  }, []);

  return (
    <C.Container>
      <C.Title>Sequência de dias estudados</C.Title>
      {weekStatus && (
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
      )}

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
