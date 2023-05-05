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

export function Streak({ user: { streak, week_status, did_complete_saturday } }) {
  const { updateLoggedUser } = useAuth();
  const route = useRoute();
  const [weekStatus, setWeekStatus] = useState([]);
  const [streakCount, setStreakCount] = useState(0);
  const todayIndex = dayjs().day();
  const today = week_status[todayIndex];

  function updateWeekStatus(dayIndex, newStatus) {
    const updatedWeekStatus = week_status.map((status, index) =>
      index === dayIndex ? newStatus : status
    );
    setWeekStatus(updatedWeekStatus);
    return updatedWeekStatus;
  }

  async function updateStreak() {
    if (today !== 'todo') return;

    try {
      const updatedWeekStatus = updateWeekStatus(todayIndex, 'done');
      const updatedStreak = streak + 1;
      setStreakCount(updatedStreak);
      await updateLoggedUser('streak', updatedStreak);
      if (todayIndex === 6) {
        await updateLoggedUser('did_complete_saturday', true);
      }

      console.log({ updatedWeekStatus });
      await updateLoggedUser('week_status', updatedWeekStatus);

      if (todayIndex !== 6 && did_complete_saturday)
        await updateLoggedUser('did_complete_saturday', false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setWeekStatus(week_status);
    setStreakCount(streak);
    if (route.name === 'Lesson' || route.name === 'Challenge') updateStreak();
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
