import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { SignOut } from '../screens/SignOut';
import { Splash } from '../screens/Splash';
import { ChangePassword } from '../screens/ChangePassword';

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignOut" component={SignOut} />
      <Stack.Screen name="change_password" component={ChangePassword} />
    </Stack.Navigator>
  );
}
