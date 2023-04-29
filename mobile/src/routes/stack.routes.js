import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Lesson } from '../screens/Lesson';
import { DrawerRoutes } from './drawer.routes';
import { SignIn } from '../screens/SignIn';
import { SignOut } from '../screens/SignOut';
import { Settings } from '../screens/Settings';
import { ChangePassword } from '../screens/ChangePassword/index';
import { Challenge } from '../screens/Challenge';
import { Codes } from '../screens/Codes';
import { Playground } from '../screens/Playground';
import { Intro } from '../screens/Intro';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignOut" component={SignOut} />
      <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
      <Stack.Screen name="Lesson" component={Lesson} />
      <Stack.Screen name="Challenge" component={Challenge} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="change_password" component={ChangePassword} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Codes" component={Codes} />
      <Stack.Screen name="Playground" component={Playground} />
    </Stack.Navigator>
  );
}
