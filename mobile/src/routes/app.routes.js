import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DrawerRoutes } from './drawer.routes';
import { Splash } from '../screens/Splash';
import { Lesson } from '../screens/Lesson';
import { Settings } from '../screens/Settings';
import { ChangePassword } from '../screens/ChangePassword/index';
import { Challenge } from '../screens/Challenge';
import { Codes } from '../screens/Codes';
import { Playground } from '../screens/Playground';
import { Intro } from '../screens/Intro';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
      <Stack.Screen name="Lesson" component={Lesson} />
      <Stack.Screen name="Challenge" component={Challenge} />
      <Stack.Screen name="Codes" component={Codes} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="change_password" component={ChangePassword} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Playground" component={Playground} />
    </Stack.Navigator>
  );
}
