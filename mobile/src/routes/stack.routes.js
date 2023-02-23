import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { DrawerRoutes } from './drawer.routes';
import { Lesson } from '../screens/Lesson';
import { Settings } from '../screens/Settings';
import { ForgotPassword } from '../screens/ForgotPassword';
import { Challenge } from '../screens/Challenge';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
      <Stack.Screen name="Lesson" component={Lesson} />
      <Stack.Screen name="Challenge" component={Challenge} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
