import { useEffect } from 'react';
import { useAuth } from './useAuth';
import { useConfig } from './useConfig';
import * as Notifications from 'expo-notifications';
Notifications.setNotificationHandler({
  shouldShowAlert: true,
  shouldPlaySound: false,
  shouldSetBadge: true,
});

export const useNotification = () => {
  const { loggedUser } = useAuth();
  const {
    config: { canPushNotification },
  } = useConfig();

  async function toggleStudyTimeNotification() {
    const schedules = await Notifications.getAllScheduledNotificationsAsync();
    const studyTimeNotification = schedules.find(schedule => schedule.identifier === 'studyTime');
    if (canPushNotification && !studyTimeNotification) {
      setStudyTimeNotification(loggedUser.study_time);
      return;
    } else if (!canPushNotification && studyTimeNotification) {
      await Notifications.cancelAllScheduledNotificationsAsync();
    }
  }

  async function setStudyTimeNotification(time) {
    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'A jornada continua 🚀!',
        body: 'Volte para a StarDust para aplicar seus conhecimentos em lógica de programação.',
        badge: 1,
      },
      identifier: 'studyTime',
      trigger: {
        hour: parseInt(time),
        minute: 0,
        repeats: true,
      },
    });
  }

  async function setNotification(type, payload) {
    const settings = await Notifications.getPermissionsAsync();
    if (!canPushNotification || !settings.granted) return;

    switch (type) {
      case 'studyTime':
        setStudyTimeNotification(payload);
        break;
      default:
        return;
    }
  }

  useEffect(() => {
    toggleStudyTimeNotification();
  }, [canPushNotification]);

  return {
    setNotification,
  };
};
