import api from "../services/api";
import dayjs from "dayjs";

const today = dayjs().day();
const sunday = 0;

export async function doSundayUpdating(update, user, setUser) {
  if (!user.didSundayUpdating && today === 3) {
    update();
    await api.updateUser('didSundayUpdating', true, user.id);
    setUser(user => ({ ...user, didSundayUpdating: true }));

  } else if (user.didSundayUpdating && today !== 3) {
    await api.updateUser('didSundayUpdating', false, user.id);
    setUser(user => ({ ...user, didSundayUpdating: false }));
  }
}
