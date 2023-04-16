import * as Notifications from 'expo-notifications';
Notifications.setNotificationHandler({
  shouldShowAlert: true,
  shouldPlaySound: false,
  shouldSetBadge: true,
});

export const useNotification = () => {
  async function getScheduleNotifications() {
    const schedules = await Notifications.getAllScheduledNotificationsAsync();
    console.log(schedules);
  }

  async function setStudyTimeNotification(time) {
    // const settings = await Notifications.getPermissionsAsync();
    // if (settings.granted) {
    //   console.log(true);
    // }

    await Notifications.cancelAllScheduledNotificationsAsync();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'A jornada continua 🚀!',
        body: 'Volte para a StarDust para aplicar seus conhecimentos em lógica de programação.',
        badge: 1,
      },
      trigger: {
        hour: parseInt(time),
        minute: 0,
        repeats: true,
      },
    });
    getScheduleNotifications();
  }

  async function setNotification(type, payload) {
    console.log(type);
    switch (type) {
      case 'studyTime':
        setStudyTimeNotification(payload);
        break;
      default:
        return;
    }
  }

  return {
    setNotification,
  };
};
