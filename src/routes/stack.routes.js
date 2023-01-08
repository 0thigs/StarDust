import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash } from '../screens/Splash';
import { Login } from '../screens/Login';
// import { Register } from "../screens/Register";
import { TabRoutes } from './tab.routes';
import { DrawerRoutes } from './drawer.routes';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
      {/* <Stack.Screen
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      /> */}
      {/* <Stack.Screen name="Register" component={Register} /> */}
    </Stack.Navigator>
  );
}
